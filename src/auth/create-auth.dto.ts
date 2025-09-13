import { IsEmail, IsInt, IsNotEmpty, IsOptional, isString, IsString } from "class-validator";

export class CreateAuthDto{

    @IsString()
    @IsNotEmpty({message:"name is required"})
    name:string;

    @IsEmail({},{message:"invalid email"})
    email:string;

    
    @IsInt({message:"age should be in int"})
    age:number;

    @IsString()
    @IsNotEmpty({message:"name is required"})
    password:string
}