import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Department, DepartmentDocument } from './department.schema';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './create-department.dto';

@Injectable()
export class DepartmentService {
    constructor(@InjectModel("department") private model:Model<DepartmentDocument>){}

    createDepartment(dto:CreateDepartmentDto){
        const dept = new this.model(dto)
        return dept.save()
    }

    getAllDepartment(){
        return this.model.find({})
    }
}
