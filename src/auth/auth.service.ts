import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDocument } from './auth.schema';
import * as bcrypt from "bcrypt"
import { CreateAuthDto } from './create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel("auth") private model:Model<AuthDocument>,private jwtservice:JwtService){}


    async create(body:CreateAuthDto){
        const hashedPassword = await bcrypt.hash(body.password,10)
        body.password = hashedPassword
        const savedUser = await this.model.create(body)    
        const token = this.jwtservice.sign(savedUser.toObject())
        return token
    }
}
