import {  authService } from "../app/service/AuthService.js"

const userprofile = document.querySelector('.userprofile')
const username = document.querySelectorAll('.username')
const userLogin = document.querySelector('.user_login')
const userReg = document.querySelector('.user_register')
const logoutBtn = document.querySelectorAll('.user_logout')


const showUserData = ()=>{
  const data = JSON.parse(localStorage.getItem('user_data'))
  console.log(data);

  if(!data){
    username.forEach(user=>user.style.display = 'none')
    userprofile.style.display = 'none'
    
  }
    
  if(userLogin && userReg){
    userLogin.style.display = data ? 'none' : 'block'
    userReg.style.display = data ? 'none' : 'block'
  }
  logoutBtn.forEach(btn=>btn.style.display = data ? 'block' : 'none')
  username.forEach(user=>user.innerHTML = data.data.userLogged.name)
}

const character = document.querySelector('.character')

const protectedRouter = ()=>{
  if(character){
  
    character.addEventListener('click', ()=>{
      const data = JSON.parse(localStorage.getItem('user_data'))
      const homepage = window.location.href === './index.html'
    
      if(data !== null){
        if(homepage){
          window.location.href = 'pages/characters.html'
        }else{
          window.location.href = '../pages/characters.html'
        }
      }else{
        window.location.href = '/pages/login.html'
    
      }
    })
  }
}



const logout = ()=>{  
  logoutBtn.forEach(btn=>btn.addEventListener('click',(e)=>{
    authService.signOut(alert('Deslogado com sucesso'))
    window.location.href = '/'
  }))
}

protectedRouter()
showUserData()
logout()
