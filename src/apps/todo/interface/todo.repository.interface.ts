import { TodoDomain } from '../domain/todo.domain';

export interface ITodoRepository {
    creteTodo(title: string): Promise<number>;
    findOneById(id: number): Promise<TodoDomain>;
    findOneByTitle(title: string): Promise<TodoDomain>;
    executeTodo(todo: TodoDomain): Promise<number>;
}
