import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEmployeeDto{

    @IsString()
    @IsNotEmpty()
    name:string
    @IsNumber()
    age:number

    @IsString()
    @IsNotEmpty()
    department:string

}