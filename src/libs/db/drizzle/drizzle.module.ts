import { Global, Module } from "@nestjs/common";
import { drizzleProvider, MYSQL_CONNECTION } from "./drizzle.provider";

@Global()
@Module({
  providers: [...drizzleProvider],
  exports: [MYSQL_CONNECTION],
})
export class DrizzleModule {}
