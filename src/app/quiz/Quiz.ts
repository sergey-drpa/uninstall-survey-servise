import {Question} from './Question';

export class State {
  public data;
  public questions = [];
  public currentQuestion;
  // public hidden = false;
  public normalClass;
  public animateClass;

  constructor(data) {
    this.data = data;

    this.setupTheme ();

    this.normalClass = data.form.animation;
    for (const i of data.form.fields) {
      this.questions.push(new Question(i));
    }

    this.currentQuestion = this.questions[0];
  }

  answerClick (answer) {
    // this.zone.run(() => {
    this.hideQuestion(this.data.form.animation);
    // });

    const self = this;

    setTimeout(() => {
      self.selectQuestion(answer);
      self.showQuestion(this.data.form.animation);
    }, 500);
  }

  selectQuestion (answer) {
    let next;
    // if (answer.next != null) {
      next = this.findNext(answer);
      if (next != null) {
        this.currentQuestion = next;
      }
    // } else { /* Draw Thank you. */

    // }
  }

  findNext (answer) {
    let question = null;

    if (answer.next != null) {
      question = this.findQuestionById (answer.next);
    }
    if (question == null || answer.question.next != null) {
      question = this.findQuestionById (answer.question.next);
    }
    if (question == null) {
      question = this.findQuestionById ('thankYouScreen');
    }

    return question;
  }

  findQuestionById (id) {
    for (const i of this.questions) {
      if (i.id === id) {
        return i;
      }
    }
    return null;
  }

  setupTheme () {
    // this.backgroundColor = this.data.form.theme.colors.background;
  }

  hideQuestion (animation) {
    switch (animation) {
      case 'moveRight': {
        this.animateClass = animation + 'Animate';
        break;
      }
      default: { // 'hide' animation
        this.animateClass =  animation + 'Animate';
        break;
      }
    }
  }

  showQuestion (animation) {
    switch (animation) {
      case 'moveRight': {
        this.animateClass = '';
        break;
      }
      default: { // 'hide' animation
        this.animateClass =  '';
        break;
      }
    }
  }
}
