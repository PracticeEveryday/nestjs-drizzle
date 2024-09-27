import { TTodoProps } from '@TODO/interface/todo.interface';

export class TodoDomain {
    public id: number;
    public title: string;
    public isCompleted: boolean;

    constructor(param: TTodoProps) {
        this.title = param.title;
        this.isCompleted = param.isCompleted;
        this.id = param.id;
    }
}
