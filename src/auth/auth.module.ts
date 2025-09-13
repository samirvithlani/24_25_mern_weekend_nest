import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{name:"auth",schema:AuthSchema}]),
  PassportModule,
  JwtModule.register({
    secret:"samir",
    signOptions:{expiresIn:"1d"}
  })

],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
