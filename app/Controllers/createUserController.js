import { userService } from "../service/UserService.js"


const createUserController = () => {
  const name = document.querySelector('#crt_name')
  const email = document.querySelector('#crt_email')
  const password = document.querySelector('#crt_password')
  const image = document.querySelector('#crt_image')

  const btn = document.querySelector('#crt_submit')
  const submitForm = async () => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const dataForm = getDataForm()
      createUser(dataForm.name, dataForm.email, dataForm.password)
      alert('Usuário criado com sucesso')
      window.location.href = '/'
    })
  }


  const getDataForm = () => {
    return {
      name: name.value,
      email: email.value,
      password: password.value,
      image: image.value
    }
  }


  const createUser = async (name, email, password) => {
    return await userService.createUser(name, email, password)
  }
  submitForm()
}

createUserController()
