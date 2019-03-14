import {Answer} from './Answer';

export class Question {
  id;
  type; // question | thankYouScreen
  title;
  subTitle;
  ref;
  description;
  randomize;
  allow_multiple_selection;
  allow_other_choice;
  vertical_alignment;
  next;
  answers: Answer[] = [];

  constructor(startQuestion) {
    this.id = startQuestion.id;
    if (this.id === 'thankYouScreen') {
      this.type = 'thankYouScreen';
    } else {
      this.type = 'question';
    }
    this.title = startQuestion.title;
    this.subTitle = startQuestion.sub_title;
    this.ref = startQuestion.ref;
    this.description = startQuestion.description;
    this.randomize = startQuestion.randomize;
    this.allow_multiple_selection = startQuestion.allow_multiple_selection;
    this.allow_other_choice = startQuestion.allow_other_choice;
    this.vertical_alignment = startQuestion.vertical_alignment;
    this.next = startQuestion.name;

    if (startQuestion.properties.choices != null) {
      for (const k of startQuestion.properties.choices) {
        this.answers.push(new Answer(k, this));
      }
    }

    if ( startQuestion.properties.allow_other_choice === true ) {
      this.answers.push(new Answer({
        id: 'otherChoice',
        next: 'thankYouScreen'
      }, this));
    }
  }
}
