import { CRUD } from "../../common/crud.interface";
import usersDao from "../daos/users.dao";

import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";

class UsersService implements CRUD{
  
  async  list  (limit: number, page: number){
        return usersDao.getUsers()
   }

   async create  (resource: CreateUserDto){ 
        return usersDao.addUser(resource)
    }

    async putById (id: string, resource: PutUserDto){
        return usersDao.putUserById(id, resource)
    }


   async readById (id: string){
        return usersDao.getUserById(id)
    }

   async  deleteById (id: string) {
        return usersDao.removeUserById(id)
    }

    async patchById (id: string, resource: PatchUserDto){
        return usersDao.patchUserById(id, resource)
    }

    async getUserByEmail(email: string) {
        return usersDao.getUserByEmail(email);
    }

}

export default new UsersService()