import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { EnvModule } from '@COMMON/env/env.module';
import { LogInterceptor } from '@COMMON/interceptor/log.interceptor';

import { TodoModule } from '@TODO/todo.module';

import { DrizzleModule } from '@DB/drizzle/drizzle.module';

import { LoggerModule } from '@LOGGER/logger.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

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
