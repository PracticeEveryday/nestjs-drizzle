import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { EnvService } from "@COMMON/env/env.service";
import { EnvEnum } from "@COMMON/env/env.enum";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const envService = app.get(EnvService);
  const port = envService.getOrThrow<string>(EnvEnum.PORT);

  await app.listen(+port);
}

bootstrap();
