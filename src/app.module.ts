import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EnvModule } from "./common/env/env.module";
import { EnvService } from "./common/env/env.service";

@Module({
  imports: [EnvModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
