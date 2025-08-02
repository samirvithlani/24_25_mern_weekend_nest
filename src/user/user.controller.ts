import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get("")
    findAllUsers():any{
        return this.userService.getAllUsers()
    }
    @Get("/finduser/:id")
    findUserById(@Param('id') id:string):any{
        return this.userService.findUser(id)
    }

    @Get("/searchuser")
    searchUser(@Query('name')name:string,@Query("age") age:number):any{
        console.log("called....")
        console.log(name,age)
        return this.userService.searchUser(name,age)
    }
}
