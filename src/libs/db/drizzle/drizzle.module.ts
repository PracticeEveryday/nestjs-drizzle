import { Module } from "@nestjs/common";
import { createPool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { EnvService } from "../../../common/env/env.service";
import { EnvEnum } from "../../../common/env/env.enum";
import * as schema from "./schema";

export const MYSQL_CONNECTION = "MYSQL_CONNECTION";

@Module({
  providers: [
    {
      provide: MYSQL_CONNECTION,
      useFactory: async (envService: EnvService) => {
        const pool = createPool({
          host: envService.getOrThrow<string>(EnvEnum.DB_HOST),
          user: envService.getOrThrow<string>(EnvEnum.DB_USERNAME),
          password: envService.getOrThrow<string>(EnvEnum.DB_PASSWORD),
          database: envService.getOrThrow<string>(EnvEnum.DB_DBNAME),
          port: envService.getOrThrow<number>(EnvEnum.DB_PORT),
        });

        return drizzle(pool, { schema, mode: "planetscale" });
      },
      inject: [EnvService],
    },
  ],
  exports: [MYSQL_CONNECTION],
})
export class DrizzleModule {}
