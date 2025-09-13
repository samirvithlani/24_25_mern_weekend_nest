import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService){}

    @Post()
    async createUser(@Body() body:CreateAuthDto){
        return this.authservice.create(body)
    }
}
