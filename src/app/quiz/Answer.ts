export class Answer {
  id;
  ref;
  label
  question;
  next;

  constructor(answer, question) {
    this.id = answer.id;
    this.ref = answer.ref;
    this.label = answer.label;
    this.question = question;
    this.next = answer.next;
  }
}
