import { authService } from "../app/service/AuthService.js"

const userprofile = document.querySelector('.userprofile')
const username = document.querySelectorAll('.username')
const userLogin = document.querySelector('.user_login')
const userReg = document.querySelector('.user_register')
const logoutBtn = document.querySelectorAll('.user_logout')
const character = document.querySelectorAll('.character')


const showUserData = () => {
  const data = JSON.parse(localStorage.getItem('user_data'))

  if (!data) {
    username.forEach(user => user.style.display = 'none')
    userprofile ? userprofile.style.display = 'none' : null
  }

  if (userLogin && userReg) {
    userLogin.style.display = data ? 'none' : 'block'
    userReg.style.display = data ? 'none' : 'block'
  }
  logoutBtn.forEach(btn => btn.style.display = data ? 'block' : 'none')
  username.forEach(user => user.innerHTML = data?.data.userLogged.name)
}


const protectedRouter = () => {
  if (character) {
    character.forEach(char => {
      char.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('user_data'))
        const homepage = window.location.href === './index.html'

        if (data !== null) {
          if (homepage) {
            window.location.href = 'pages/characters.html'
          } else {
            window.location.href = '../pages/characters.html'
          }
        } else {
          alert('Você precisa estar logado para acessar essa página')
          window.location.href = '/pages/login.html'

        }
      })
    })
  }
}

const menu_mobile = document.querySelectorAll('.menu_mobile')

const showMenuMobile = () => {

  menu_mobile.forEach(menu => {
    if (menu.style.display === 'none') {
      menu.style.display = 'flex'
    } else {
      menu.style.display = 'none'
    }
  })

}


const switchMenuMobile = () => {

  const clickMenu = document.querySelectorAll('.list')

  clickMenu.forEach(menu => {
    menu.addEventListener('click', showMenuMobile, false)
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu_mobile.forEach(menu => menu.style.display = 'none')
    }

  })
}



const logout = () => {
  logoutBtn.forEach(btn => btn.addEventListener('click', (e) => {
    authService.signOut(alert('Deslogado com sucesso'))
    window.location.href = '/'
  }))
}

switchMenuMobile()
protectedRouter()
showUserData()
logout()


