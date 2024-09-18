import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello() {
    return "Hello";
  }
}
