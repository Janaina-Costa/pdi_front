import { api } from "../api/api.js";

export class UserService {
  async signInService(email, password) {
    try{
      const response = await api.post('/login', {email,password})
      return response.data
    }
    catch(e){
      console.log(e);
  }
  }

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

  async createUser(name, email, password){
    try{
      const response = await api.post('/user', {name,email,password})
      return response.data
    }catch(e){
      console.log(e.response.data.message);
      
    }
  }
}

