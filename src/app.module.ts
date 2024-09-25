import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EnvModule } from "@COMMON/env/env.module";
import { LoggerModule } from "@LOGGER/logger.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LogInterceptor } from "@COMMON/interceptor/log.interceptor";
import { DrizzleModule } from "@DB/drizzle/drizzle.module";
import { TodoModule } from "@TODO/todo.module";

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: LogInterceptor,
  },
];

@Module({
  imports: [EnvModule.forRoot(), LoggerModule, DrizzleModule, TodoModule],
  controllers: [AppController],
  providers: [AppService, ...interceptors],
})
export class AppModule {}
