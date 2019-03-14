import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyCRE2KyEUyf26vM83TD2c2NG8z8ybLF1dU',
  authDomain: 'goals-and-tasks.firebaseapp.com',
  databaseURL: 'https://goals-and-tasks.firebaseio.com',
  projectId: 'goals-and-tasks',
  storageBucket: 'goals-and-tasks.appspot.com',
  messagingSenderId: '26309484684'
};

@Injectable({
  providedIn: 'root'
})
export class FsService {
  ref: any;
  quiz: any;
  quizStatistic: any;

  constructor() {
    // debugger;
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
    this.ref = firebase.firestore().collection('boards');
    this.quiz = firebase.firestore().collection('quiz');
    this.quizStatistic = firebase.firestore().collection('quiz_statistic');
  }

  postQuizAnswer(answer) {
    const self = this;
      this.quiz.where('question', '==', answer.question.title)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size === 0) {
            const answerMap = {};
            answerMap[answer.label] = 1;

            self.quiz.doc(answer.question.title).set({
              question: answer.question.title,
              answer: answerMap,
              score: 1
            })
              .then(
                res => {console.log('Question create ok: '); },
                err => {console.error('Question create failed: ', err); }
            );
            return;
          }
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data());

            return firebase.firestore().runTransaction(function(transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(doc.ref).then(function(doc_) {
                if (!doc_.exists) {
                  throw new Error('Question does not exist!');
                }

                // THIS IS WHERE TO DO THE INCREMENT
                const new_score = doc_.data().score + 1;
                const answerMap = doc_.data().answer;
                let answerCount;
                if (answerMap[answer.label] != null) {
                  answerCount = answerMap[answer.label] + 1;
                } else {
                  answerCount = 1;
                }
                answerMap[answer.label] = answerCount;

                transaction.update(doc_.ref, { score: new_score, answer: answerMap });
              });
            }).then(function() {
              console.log('Transaction successfully committed!');
            }).catch(function(error) {
              console.log('Transaction failed: ', error);
            });

          });
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });
  }

  incrementLoads() {
    const self = this;
    this.quizStatistic.where('type', '==', 'total')
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.size === 0) {

          self.quiz.doc('total').set({
            count: 1
          })
            .then(
              res => {console.log('Count create ok: '); },
              err => {console.error('Count create failed: ', err); }
            );
          return;
        }
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());

          return firebase.firestore().runTransaction(function(transaction) {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(doc.ref).then(function(doc_) {
              if (!doc_.exists) {
                throw new Error('Count does not exist!');
              }

              // THIS IS WHERE TO DO THE INCREMENT
              const count = doc_.data().count + 1;

              transaction.update(doc_.ref, { count: count });
            });
          }).then(function() {
            console.log('Transaction successfully committed!');
          }).catch(function(error) {
            console.log('Transaction failed: ', error);
          });

        });
      })
      .catch(function(error) {
        console.log('Error getting count: ', error);
      });
  }


  getBoards(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          boards.push({
            key: doc.id,
            title: data.title,
            description: data.description,
            author: data.author
          });
        });
        observer.next(boards);
      });
    });
  }

  queryBoards(word): Observable<any> {
    return new Observable((observer) => {
      this.ref.where('title', 'array_contains', word).onSnapshot((querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          boards.push({
            key: doc.id,
            title: data.title,
            description: data.description,
            author: data.author
          });
        });
        observer.next(boards);
      });
    });
  }

  getBoard(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        const data = doc.data();
        observer.next({
          key: doc.id,
          title: data.title,
          description: data.description,
          author: data.author
        });
      });
    });
  }

  postBoards(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateBoards(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteBoards(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
