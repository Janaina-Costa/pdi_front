import { api } from "../api/api.js"
import { USER_DATA, authController } from "../service/AuthService.js"

const email = document.querySelector('#lg_email')
const password = document.querySelector('#lg_password')
const btn = document.querySelector('#lg_submit')

const loginUserController = ()=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault()
      const dataForm = getDataForm()
      signIn(dataForm.email, dataForm.password)
    
      email.value= ''
      password.value = ''
      
    })
  }

  

//dados do formulario
const getDataForm = ()=>{
  return {
    email: email.value,
    password: password.value
  }
}


const signIn = async(email,password)=>{
  try{
    await authController.signIn(email,password)
   
  }catch(err){
    console.log(err);
    alert(err.response.data.message)
  }
}

const logout = ()=>{
  const btn = document.querySelector('#out_submit')
  btn.addEventListener('click',(e)=>{
    e.preventDefault()
    authController.signOut(alert('Deslogado com sucesso'))
  })
}


loginUserController()
logout()
