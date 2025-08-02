import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/user1")
  getUser():any{
    return this.appService.getUser()
  }
  @Get("/users2")
  getUsers():any{
    return this.appService.getUsers()
  }
}
