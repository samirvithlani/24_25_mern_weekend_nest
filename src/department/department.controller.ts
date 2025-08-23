import { Body, Controller, Post } from '@nestjs/common';
import { CreateDepartmentDto } from './create-department.dto';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {

    constructor(private deptservice:DepartmentService){}
    @Post()
    create(@Body() dto:CreateDepartmentDto){
        console.log("here....")
        console.log(dto)
        return this.deptservice.createDepartment(dto);
    }
}
