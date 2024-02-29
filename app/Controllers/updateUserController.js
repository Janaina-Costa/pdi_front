import { api } from "../api/api.js"
import { USER_DATA } from "../service/AuthService.js"
import { userService } from "../service/UserService.js"

const name = document.getElementById('upd_name')
const email = document.getElementById('upd_email')
const password = document.getElementById('upd_password')
const image = document.getElementById('upd_image')
const btn = document.getElementById('upd_submit')


const updateUserController = ()=>{

  btn.addEventListener('click',async(e)=>{
    e.preventDefault()
    const dataForm = getDataForm()
    console.log(dataForm.name);
    await updateUser(dataForm.name, dataForm.email, dataForm.password, dataForm.image) 

  })

  //dados do formulario
  const getDataForm = ()=>{    
    return {
      name: name.value,
      email: email.value,
      password: password.value,
      image: image.value
    }
  }
}


const formInitialData = async()=>{
  let user
  console.log('caii');
 
  if(USER_DATA){
    api.defaults.headers.Authorization = `Bearer ${USER_DATA.data.token}`   
    const userId = USER_DATA.data.userLogged.id
    user = await getUser(userId)
  }
  name.value = user.name
  email.value = user.email
  password.value = user.password
  image.value = user.image
}

const getUser = async(id)=>{    
 return await userService.getUserById(id)
}

const updateUser = async(name, email, password, image)=>{
  return  await userService.updateUser(USER_DATA.data.userLogged.id, name, email, password, image)
}

formInitialData()

updateUserController()