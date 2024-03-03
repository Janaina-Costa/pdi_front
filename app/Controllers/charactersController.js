const baseUrl = 'https://thronesapi.com/api/v2/Characters'

let id
const createCharacterList = async ()=>{
  const ul = document.querySelector('.scroll_container')
    
  const data = await getAllCharacters()
  data.map(character=>{
    let li = document.createElement('li')
    let img = document.createElement('img')

    li.classList.add('scroll_img')
    li.classList.add('select_character')
    
    img.style.width = '5rem'
    img.style.height = '5rem'
    img.style.borderRadius = '100%'
    
    img.setAttribute('id', character.id)
    img.src = character.imageUrl
    img.alt = character.fullName
    

    li.appendChild(img)
    ul.appendChild(li)


    li.addEventListener('click', ()=>{
      id = character.id
      switchModal()
      createModalContent(id)
    })
  })
}


const createModalContent = (id)=>{
  const modal = document.querySelector('.modal')
  const modalContent = document.querySelector('.content_modal')
  modalContent.innerHTML = ''
  getCharacterById(id).then(character=>{
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let button = document.createElement('button')

    img.src = character.imageUrl
    img.alt = character.fullName
    img.style.width = '16rem'
    img.style.height = '16rem'
    img.style.borderRadius = '100%'
    img.style.margin = 'auto'
    img.style.display = 'block'

    h2.textContent = character.fullName
    h2.style.textAlign = 'center'
    h2.style.margin = '1rem 0'
    p.textContent = character.title
    p.style.textAlign = 'center'
    p.style.margin = '1rem 0'
    button.textContent = 'Close'
    button.style.margin = '1rem 0'
    button.style.display = 'block'
    button.style.width = '100%'
    button.style.padding = '1rem'
    button.style.backgroundColor = 'orangered'
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.borderRadius = '5px'
    button.style.cursor = 'pointer'

    button.addEventListener('click', ()=>{
      switchModal()
    })

    modalContent.appendChild(img)
    modalContent.appendChild(h2)
    modalContent.appendChild(p)
    modalContent.appendChild(button)
  })
}


const switchModal = ()=>{  
  const modal = document.querySelector('.modal')
  const styleModal = modal.style.display
  
  if(styleModal === 'none'){
    modal.style.display = 'block'
  }else{
    modal.style.display ='none'
  }
}
  
window.onclick = (event)=>{
  const modal = document.querySelector('.modal')
  if(event.target == modal){
    switchModal()
  }
}
  

const getAllCharacters =async()=>{
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}


const getCharacterById = async(id)=>{
  const response = await fetch(`${baseUrl}/${id}`)
  const data = await response.json()
  return data
}
createCharacterList()


