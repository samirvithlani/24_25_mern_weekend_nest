import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type AuthDocument = Auth & Document

@Schema({timestamps:true})
export class Auth{


    @Prop({required:true})
    name:string

    @Prop()
    age:number

    @Prop()
    email:string

    @Prop()
    password:string

}

export const AuthSchema = SchemaFactory.createForClass(Auth)