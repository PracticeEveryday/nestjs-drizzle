import { Inject, Injectable } from "@nestjs/common";
import { MYSQL_CONNECTION } from "../drizzle.provider";
import { MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "../schema";
import { ITodoRepository } from "@TODO/interface/todo.repository.interface";
import { TodoDomain } from "@TODO/domain/todo.domain";
import { eq } from "drizzle-orm";
import { Mapper } from "../../../mapper/mapper";

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @Inject(MYSQL_CONNECTION)
    private readonly db: MySql2Database<typeof schema>,
  ) {}

  public async creteTodo(title: string): Promise<number> {
    const newTodo = await this.db.insert(schema.todo).values({ title });

    return newTodo[0].insertId;
  }

  public async findOneById(id: number): Promise<TodoDomain> {
    const todo = await this.db.query.todo.findFirst({
      where: eq(schema.todo.id, id),
    });

    return Mapper.toRequired<TodoDomain>(TodoDomain)(todo);
  }

  public async findOneByTitle(title: string): Promise<TodoDomain> {
    const todo = await this.db.query.todo.findFirst({
      where: eq(schema.todo.title, title),
    });

    return Mapper.toRequired<TodoDomain>(TodoDomain)(todo);
  }

  public async executeTodo(todo: TodoDomain): Promise<number> {
    const resultSetHeader = await this.db
      .insert(schema.todo)
      .values({
        id: todo.id,
        isCompleted: true,
        title: todo.title,
      })
      .onDuplicateKeyUpdate({
        set: { isCompleted: true, title: todo.title },
      });

    return resultSetHeader[0].insertId;
  }
}
