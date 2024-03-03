
const switchModal = ()=>{  
  const modal = document.querySelector('.modal')
  const styleModal = modal.style.display

  if(styleModal === 'none'){
    modal.style.display = 'block'
  }else{
    modal.style.display ='none'
  }
}

const selectChar = document.querySelector('.select_character').addEventListener('click', switchModal)

window.onclick = (event)=>{
  const modal = document.querySelector('.modal')
  if(event.target == modal){
    switchModal()
  }
}