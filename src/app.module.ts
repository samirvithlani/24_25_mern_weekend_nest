import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestmern"), UserModule, DepartmentModule, EmployeeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
      //consumer.apply(LoggerMiddleware).forRoutes('user')
      //consumer.apply(LoggerMiddleware).forRoutes('*')
      consumer.apply(LoggerMiddleware).exclude({path:"employee",method:RequestMethod.ALL}).forRoutes("*")
  }
}
