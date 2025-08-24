import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestmern"),UserModule, DepartmentModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
