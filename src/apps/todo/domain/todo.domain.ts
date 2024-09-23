export class TodoDomain {
  public id: number;
  public title: string;
  public isCompleted: boolean;

  constructor(param: { title: string; isCompleted: boolean; id: number }) {
    this.title = param.title;
    this.isCompleted = param.isCompleted;
    this.id = param.id;
  }
}
