import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty({message:"name is required"})
    name:string;

    @IsEmail({},{message:"invalid email"})
    email:string;

    
    @IsInt({message:"age should be in int"})
    age:number;
}