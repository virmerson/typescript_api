import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";

import shortid from "shortid";
import debug from "debug";

const log: debug.IDebugger = debug ('app:in-memory-dao')

class UsersDao{
    users:Array<CreateUserDto> = []

    constructor(){
        log('Created a new instance of UsersDao')
    }

    async addUser (user:CreateUserDto){
        user.id =  shortid.generate()
        this.users.push(user)
        return user.id
    }
    async getUsers(){
        return this.users
    }

    async getUserById(userId:string){
        const user=  this.users.find( (user)=> user.id==userId  )
        return user;
    }

    async putUserById(userId:string, user:PutUserDto){
        const objIndex = this.users.findIndex( (obj: {id:string})=> { obj.id===userId})
        this.users.splice(objIndex, 1, user)
        return `${user.id} updated via put`
    }

    async patchUserById(userId:string, user:PatchUserDto){
            const objIndex = this.users.findIndex( (obj:{id:string}) =>  obj.id===userId )

            let currentUser:CreateUserDto = this.users[objIndex]

            let allowedFields = [
                'email',
                'password',
                'firstName',
                'lastName',
                'permissionLevel'
            ]

            for (let field of allowedFields){
                if (field in user ){
                    // @ts-ignore
                    currentUser[field] =  user[field]
                }
            }
            
            return `${userId} patched `
    }

    async removeUserById(userId: string) {
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
        this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }
    
    async getUserByEmail(email: string) {
        const objIndex = this.users.findIndex(
            (obj: { email: string }) => obj.email === email
        );
        let currentUser = this.users[objIndex];
        if (currentUser) {
            return currentUser;
        } else {
            return null;
        }
    }
    
}

export default new UsersDao();