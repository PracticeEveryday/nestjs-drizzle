import { Inject, Injectable } from "@nestjs/common";
import { MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "../../libs/db/drizzle/schema";
import { MYSQL_CONNECTION } from "../../libs/db/drizzle/drizzle.provider";

@Injectable()
export class TodoService {
  constructor(
    @Inject(MYSQL_CONNECTION)
    private readonly db: MySql2Database<typeof schema>,
  ) {}

  public async createTodo() {
    return this.db.query.user.findFirst();
  }
}
