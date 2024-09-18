import { Inject, Injectable } from "@nestjs/common";
import { MYSQL_CONNECTION } from "./libs/db/drizzle/drizzle.module";
import { MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "./libs/db/drizzle/schema";

@Injectable()
export class AppService {
  constructor(
    @Inject(MYSQL_CONNECTION)
    private readonly db: MySql2Database<typeof schema>,
  ) {}

  async getHello(email: string) {
    return this.db.query.user.findFirst();
  }
}
