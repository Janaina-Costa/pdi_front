import { USER_DATA } from "../app/service/AuthService.js"

const batata = document.querySelector('#batata')
const batataLogada = ()=>{
  const teste = USER_DATA
  if(teste){
    batata.textContent = teste.data.userLogged.name
  }
}
batataLogada()