import { Global, Module } from "@nestjs/common";
import { drizzleProvider, MYSQL_CONNECTION } from "./drizzle.provider";
import { TodoRepository } from "./repository/todo.repository";
import { TodoMapper } from "./mapper/todo.mapper";
import { repositoryProvider } from "./provider/repository.provider";

@Global()
@Module({
  providers: [...drizzleProvider, ...repositoryProvider, TodoMapper],
  exports: [MYSQL_CONNECTION, ...repositoryProvider],
})
export class DrizzleModule {}
