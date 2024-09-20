import { TodoDomain } from "../domain/todo.domain";

export interface ITodoRepository {
  creteTodo(title: string): Promise<number[]>;
  findOneById(id: number): Promise<TodoDomain>;
}
