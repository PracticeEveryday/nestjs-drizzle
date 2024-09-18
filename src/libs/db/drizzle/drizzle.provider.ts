import { EnvService } from "../../../common/env/env.service";
import { createPool } from "mysql2/promise";
import { EnvEnum } from "../../../common/env/env.enum";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

export const MYSQL_CONNECTION = "MYSQL_CONNECTION";

export const drizzleProvider = [
  {
    provide: MYSQL_CONNECTION,
    useFactory: async () => {
      const pool = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME,
        port: +process.env.DB_PORT!,
      });

      return drizzle(pool, { schema, mode: "planetscale" });
    },
  },
];
