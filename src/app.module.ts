import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EnvModule } from "./common/env/env.module";
import { LoggerModule } from "./libs/logger/logger.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LogInterceptor } from "./common/interceptor/log.interceptor";

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: LogInterceptor,
  },
];

@Module({
  imports: [EnvModule.forRoot(), LoggerModule],
  controllers: [AppController],
  providers: [AppService, ...interceptors],
})
export class AppModule {}
