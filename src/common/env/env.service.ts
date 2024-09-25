import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvEnum } from './env.enum';

@Injectable()
export class EnvService {
    constructor(private readonly configService: ConfigService) {}

    getOrThrow<T>(key: EnvEnum): T {
        if (!this.configService.getOrThrow(EnvEnum[key])) {
            throw new Error('.env 파일에 프로퍼티가 없습니다.');
        }

        return this.configService.getOrThrow(EnvEnum[key]);
    }
}
