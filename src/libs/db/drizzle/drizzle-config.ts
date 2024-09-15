import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config(); // 환경 변수 로드

export default defineConfig({
  schema: "src/libs/db/drizzle/schema.ts",
  dialect: "mysql",
  out: "src/libs/db/drizzle/migrate",
  migrations: {
    table: "migration",
    prefix: "supabase",
  },
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    port: 3306,
  },
});
