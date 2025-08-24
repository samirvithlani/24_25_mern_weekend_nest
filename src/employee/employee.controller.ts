import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService:EmployeeService){}

    @Post("")
    create(@Body()dto:CreateEmployeeDto){
        return this.employeeService.createEmployee(dto)
    }

    @Get("")
    getAll(){
        return this.employeeService.getALlEmployees()
    }
}
