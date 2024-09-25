import { Global, Module } from "@nestjs/common";
import { drizzleProvider, MYSQL_CONNECTION } from "./drizzle.provider";
import { repositoryProvider } from "./provider/repository.provider";

@Global()
@Module({
  providers: [...drizzleProvider, ...repositoryProvider],
  exports: [MYSQL_CONNECTION, ...repositoryProvider],
})
export class DrizzleModule {}
