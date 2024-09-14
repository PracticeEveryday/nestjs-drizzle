import { Module } from "@nestjs/common";
import { drizzleProvide } from "./drizzle.provider";

@Module({
  providers: [...drizzleProvide],
  exports: [...drizzleProvide],
})
export class DrizzleModule {}
