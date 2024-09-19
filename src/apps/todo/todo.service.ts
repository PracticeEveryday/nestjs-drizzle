import { Inject, Injectable } from "@nestjs/common";
import { MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "../../libs/db/drizzle/schema";
import { MYSQL_CONNECTION } from "../../libs/db/drizzle/drizzle.provider";
import { ITodoRepository } from "./interface/todo.repository.interface";
import { TodoDomain } from "./domain/todo.domain";
import { TodoRepository } from "../../libs/db/drizzle/repository/todo.repository";
import { RepositoryToken } from "../../libs/db/drizzle/provider/repository.token";

@Injectable()
export class TodoService {
  constructor(
    @Inject(RepositoryToken.TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  public async createTodo(title: string): Promise<number[] | number> {
    return this.todoRepository.creteTodo(title);
  }
}
