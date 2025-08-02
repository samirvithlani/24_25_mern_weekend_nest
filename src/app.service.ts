import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  users:any=[
    {
      id:1,
      name:"amit",
      age:23
    },
    {
      id:2,
      name:"sumit",
      age:25
    }
  ]
  
  getHello(): string {
    return 'Hello World!';
  }

  getUsers():any{
    return this.users
  }

  getUser():any{
    return {id:1,name:"raj",age:23}
  }
}
