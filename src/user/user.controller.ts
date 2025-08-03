import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

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
       
        return this.userService.searchUser(name,age)
    }

    @Post("/adduser")
    createUser(@Body() body:any){
        return {"message":"user created...",data:body}
    }

    @Post("/genuser")
    generateUser(@Body()user:CreateUserDto){
        return user;
    }

}
