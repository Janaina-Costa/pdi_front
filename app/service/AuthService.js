import { api } from "../api/api.js"
import { userService } from "./UserService.js"

export const USER_DATA = JSON.parse(localStorage.getItem('user_data')) || {}

class AuthService{

  async signIn (email, password){
    const data = await api.post('/login', {email,password})
    if(!data){
      return
    }
    localStorage.setItem('user_data',JSON.stringify(data))

    api.defaults.headers.Authorization = `Bearer ${data.data.token}`
    userService.getUserById(data.data.userLogged.id)  
    window.location.href = '/'
    return data.data
  }
  
   signOut(message){    
    if(!!USER_DATA){
      localStorage.removeItem('user_data')
      api.defaults.headers.Authorization = undefined
      return message
    }
  }
}
export const authService = new AuthService()