import { Inject, Injectable } from "@nestjs/common";
import { MYSQL_CONNECTION } from "../drizzle.provider";
import { MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "../schema";
import { ITodoRepository } from "../../../../apps/todo/interface/todo.repository.interface";
import { TodoMapper } from "../mapper/todo.mapper";

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @Inject(MYSQL_CONNECTION)
    private readonly db: MySql2Database<typeof schema>,

    private readonly todoMapper: TodoMapper,
  ) {}

  public async creteTodo(title: string): Promise<number[]> {
    const newTodo = await this.db
      .insert(schema.todo)
      .values({ title })
      .$returningId();

    return newTodo.map((e) => e.id);
  }
}
