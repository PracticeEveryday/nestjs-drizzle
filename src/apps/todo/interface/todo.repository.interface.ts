import { TodoDomain } from "../domain/todo.domain";

export interface ITodoRepository {
  creteTodo(title: string): Promise<number[] | number>;
}
