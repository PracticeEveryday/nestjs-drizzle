import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config(); // 환경 변수 로드

export default defineConfig({
    dialect: 'mysql',
    out: 'src/libs/db/drizzle/migrate',
    schema: 'src/libs/db/drizzle/schema.ts',
    migrations: {
        table: 'migration',
        prefix: 'supabase',
    },
    dbCredentials: {
        host: process.env.DB_HOST as string,
        user: process.env.DB_USERNAME as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_DBNAME as string,
        port: +process.env.DB_PORT!,
    },
});
