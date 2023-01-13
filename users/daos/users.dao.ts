import mongooseService from "../../common/service/mongoose.service";
import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";
import {PermissionFlag} from '../../common/middleware/common.permissionflag.enum'

import shortid from "shortid";
import debug from "debug";
import { Schema } from "mongoose";

const log: debug.IDebugger = debug ('app:in-mongodb-dao')

class UsersDao{
   
   Schema =  mongooseService.getMongoose().Schema; 

   userSchema  = new this.Schema({
        _id: String,
        email: String,
        password: { type: String, select: false },
        firstName: String,
        lastName: String,
        permissionFlags: Number,
    }, { id: false })

    User = mongooseService.getMongoose().model('User',this.userSchema )

    constructor(){
        log('Created a new instance of UsersDao')
    }

    async addUser (userFields:CreateUserDto){
       const userId =  shortid.generate();
       const user = new this.User({
        _id : userId,
        ...userFields,
        permissionFlags: PermissionFlag.FREE_PERMISSION,
       })

        await user.save()
        return userId
    }
    async getUsers(limit=  25, page=0){

        //1-25  (p 1)
        //26 -50
        //
        return this.User.find().limit(limit).skip(limit*page).exec()


    }

    async getUserById(userId:string){
        return this.User.findOne({_id:userId}).exec()
    } 

    async updateUserById(userId:string, userFields:PatchUserDto | PutUserDto){
      
      const existingUser = await this.User.findOneAndUpdate( 

            { _id:userId},
            {$set: userFields},
            {new :true}

       ).exec()

        return existingUser
    }

   

    async removeUserById(userId: string) {
        this.User.deleteOne({_id:userId}).exec()
    }
    
    async getUserByEmail(email: string) {

        log("getUserByEmail: "+ email)
       return this.User.findOne({email:email}).exec()
    }


    async getUserByEmailWithPassword(email:string){
        return this.User.findOne({email:email}).select('_id email permissionFlags +password').exec()
    }
    
}

export default new UsersDao();