import { api } from "../api/api.js";
import { USER_DATA } from "./AuthService.js";

class UserService {
  async getUsers(){
    try{
      const response = await api.get('/users')
      return response.data
    }catch(e){
      console.log(e);
    }
  }

  async getUserById(id){
    try{
      const response = await api.get(`/user/${id}`)
      return response.data
    }catch(e){
      console.log(e);
    }
  }

  async updateUser(id, name, email, password, image){
    try{
      const response = await api.put(`/user/update/${id}`, {name,email,password,image});
      return response.data
    }catch(e){
      console.log(e);
    }
  }

  async createUser(name, email, password){
    try{
      const response = await api.post('/user', {name,email,password})
      return response.data
    }catch(e){
      console.log(e.response.data.message);
      
    }
  }
}

export const userService = new UserService()