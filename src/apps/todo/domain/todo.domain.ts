export class TodoDomain {
  public title: string;
  public isComplete: boolean;

  constructor(title: string, isComplete: boolean) {
    this.title = title;
    this.isComplete = isComplete;
  }
}
