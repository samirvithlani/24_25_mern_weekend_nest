import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDocument } from './employee.schema';
import { CreateEmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
    constructor(@InjectModel("employee") private model:Model<EmployeeDocument>){}
    
    createEmployee(dto:CreateEmployeeDto){
        const emp = new this.model(dto)
        return emp.save()
    }
    getALlEmployees(){
        return this.model.find().populate("department")
    }
}
