export class TodoDomain {
  public title: string;
  public isComplete: boolean;

  constructor(param: { title: string; isComplete: boolean }) {
    this.title = param.title;
    this.isComplete = param.isComplete;
  }
}
