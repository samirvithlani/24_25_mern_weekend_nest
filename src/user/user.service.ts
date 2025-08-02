import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    users:any=[
        {
            id:1,
            name:"amit",
            age:23,
            status:true
        },
        {
            id:2,
            name:"raj",
            age:24,
            status:true
        },
        {
            id:3,
            name:"sumit",
            age:25,
            status:true
        }
    ]

    getAllUsers():any{
        return {"id":1,name:"amit",age:23}
    }

    findUser(id:string):any{

        let founduser = this.users.find((user:any)=>user.id == id)
        return founduser
    }

    searchUser(name:string,age:number):any{
        console.log("here..")
        let founduser = this.users.filter((user:any)=>user.age==age && user.name == name)
        if(founduser){
            return {
                message:"user found",
                data:founduser
            }
        }
        else{
            return{
                message:"user not found",
                data:null
            }
        }
    }

}
