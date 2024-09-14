import * as Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
export const DrizzleAsyncProvider = "drizzleProvider";

import * as schema from "./schema";

export const drizzleProvide = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const sqlite = new Database("nestjs-drizzle.db");
      const db = drizzle(sqlite, { schema });

      return db;
    },
    exports: [DrizzleAsyncProvider],
  },
];
