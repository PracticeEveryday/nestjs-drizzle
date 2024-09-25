import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvService } from './env.service';

import { NodeEnvEnum } from './node.env.enum';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: (() => {
                const envFiles: string[] = [];
                switch (process.env.NODE_ENV) {
                    case NodeEnvEnum.TEST:
                        envFiles.push(`.env.${NodeEnvEnum.TEST}`);
                        break;
                    case NodeEnvEnum.DEV:
                        envFiles.push(`.env.${NodeEnvEnum.DEV}`);
                        break;
                    case NodeEnvEnum.RELEASE:
                        envFiles.push(`.env.${NodeEnvEnum.RELEASE}`);
                        break;
                    case NodeEnvEnum.PROD:
                        envFiles.push(`.env.${NodeEnvEnum.PROD}`);
                        break;
                    default:
                        envFiles.push(`.env`);
                        break;
                }
                return envFiles;
            })(),
            isGlobal: true,
        }),
    ],
    providers: [EnvService],
    exports: [EnvService],
})
export class EnvModule {
    static forRoot(): DynamicModule {
        return {
            global: true,
            module: EnvModule,
        };
    }
}
