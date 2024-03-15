import { api } from "../api/api.js"
import { userService } from "./UserService.js"

const storageData = JSON.parse(localStorage.getItem('user_data')) || {}
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
     
    if(!!storageData){
      localStorage.removeItem('user_data')
      api.defaults.headers.Authorization = undefined
      return message
    }
  }

  isAuthenticated(){
    console.log('oi', storageData?.data?.token)
    
    if(storageData?.data?.token){
      return true
    }
  }
}
export const authService = new AuthService()