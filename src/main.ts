import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { EnvService } from "./common/env/env.service";
import { EnvEnum } from "./common/env/env.enum";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envService = app.get(EnvService);
  const port = envService.getOrThrow(EnvEnum.PORT);

  await app.listen(+port);
}

bootstrap();
