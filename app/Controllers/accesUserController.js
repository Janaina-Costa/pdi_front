import { authService } from "../service/AuthService.js"

const email = document.querySelector('#lg_email')
const password = document.querySelector('#lg_password')
const btn = document.querySelector('#lg_submit')

const loginUserController =  ()=>{
    btn.addEventListener('click',async (e)=>{
      e.preventDefault()
      const dataForm = getDataForm()
      await signIn(dataForm.email, dataForm.password)
    
      email.value= ''
      password.value = ''
      
    })
  }

const getDataForm = ()=>{
  return {
    email: email.value,
    password: password.value
  }
}

const signIn = async(email,password)=>{
  try{
    await authService.signIn(email,password)
   
  }catch(err){
    console.log(err);
    alert(err.response.data.message)
  }
}



loginUserController()

