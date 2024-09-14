import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("ids", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
  password: text("password"),
});
