import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
export type DepartmentDocument =Department & Document

@Schema({timestamps:true})
export class Department{

    @Prop({required:true})
    name:string
}
export const DepartmentSchema = SchemaFactory.createForClass(Department)