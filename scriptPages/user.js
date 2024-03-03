import {  authService } from "../app/service/AuthService.js"

const userprofile = document.querySelector('.userprofile')
const username = document.querySelector('.username')
const userLogin = document.querySelector('.user_login')
const userReg = document.querySelector('.user_register')
const logoutBtn = document.querySelector('.user_logout')

console.log('gasfgsdfjisf');
const showUserData = ()=>{
  const data = JSON.parse(localStorage.getItem('user_data'))
  console.log(data);

  if(!data){
    username.style.display = 'none'
    userprofile.style.display = 'none'
  }

  userLogin.style.display = data ? 'none' : 'block'
  userReg.style.display = data ? 'none' : 'block'
  username.innerHTML = data.data.userLogged.name
}

const logout = ()=>{  
  logoutBtn.addEventListener('click',(e)=>{
    authService.signOut(alert('Deslogado com sucesso'))
  })
}

showUserData()
logout()
