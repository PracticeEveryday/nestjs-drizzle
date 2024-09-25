import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { EnvService } from './env.service';

import { EnvEnum } from './env.enum';

describe('EnvService', () => {
    let configService: EnvService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: ['.env.test'],
                }),
            ],
            providers: [EnvService],
        }).compile();

        configService = module.get<EnvService>(EnvService);
    });

    it('should be defined', () => {
        expect(configService).toBeDefined();
    });

    it('configService.getOrThrow .env.test 파일에 값이 있다면 일치한다.', () => {
        const port = configService.getOrThrow(EnvEnum.PORT);

        expect(port).toBe('3000');
    });
});
