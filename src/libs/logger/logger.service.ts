import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

@Injectable()
export class LoggerService implements NestLoggerService {
    debug(message: unknown, ...optionalParams: unknown[]) {
        console.debug(`🐛 ${message}`, ...optionalParams);
    }

    warn(message: unknown, ...optionalParams: unknown[]) {
        console.warn(`🚨 ${message}`, ...optionalParams);
    }

    log(message: unknown, ...optionalParams: unknown[]) {
        console.log(`🪵 ${message}`, ...optionalParams);
    }

    info(message: unknown, ...optionalParams: unknown[]) {
        console.info(`🪵 ${message}`, ...optionalParams);
    }

    error(message: unknown, ...optionalParams: unknown[]) {
        console.error(`💥 ${message}`, ...optionalParams);
    }
}
