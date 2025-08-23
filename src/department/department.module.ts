import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from './department.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"department",schema:DepartmentSchema}])],
  controllers: [DepartmentController],
  providers: [DepartmentService]
})
export class DepartmentModule {}
