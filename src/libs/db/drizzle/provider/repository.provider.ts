import { TodoRepository } from "../repository/todo.repository";
import { RepositoryToken } from "./repository.token";

export const repositoryProvider = [
  { provide: RepositoryToken.TODO_REPOSITORY, useClass: TodoRepository },
];
