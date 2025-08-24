import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type EmployeeDocument = Employee & Document

@Schema({timestamps:true})
export class Employee{


    @Prop({required:true})
    name:string

    @Prop()
    age:number

    @Prop({type:Types.ObjectId,ref:"department"})
    department:Types.ObjectId

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)