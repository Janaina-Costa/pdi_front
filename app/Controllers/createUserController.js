import { userService } from "../service/UserService.js"


const createUserController = ()=>{
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const image = document.querySelector('#image')

const btn = document.querySelector('#submit')
  const submitForm = async()=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault()
      const dataForm = getDataForm()    
      createUser(dataForm.name, dataForm.email, dataForm.password)
    })
  }
  
  //pegar dados formulario
  const getDataForm = ()=>{    
    return {
      name: name.value,
      email: email.value,
      password: password.value,
      image: image.value
    }
  }
  
  //acessa rota de criação de usuario na api
  const createUser = async(name, email, password)=>{    
    return await userService.createUser(name, email, password)
  }
  submitForm()
}

createUserController()
