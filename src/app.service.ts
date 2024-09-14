import { Inject, Injectable } from "@nestjs/common";
import { DrizzleAsyncProvider } from "./libs/db/drizzle/drizzle.provider";
import { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import * as schema from "./libs/db/drizzle/schema";
import { eq } from "drizzle-orm";

@Injectable()
export class AppService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: BetterSQLite3Database<typeof schema>,
  ) {}

  async getHello(email: string) {
    return this.db.query.user.findFirst({
      where: eq(schema.user.email, email),
    });
  }
}
