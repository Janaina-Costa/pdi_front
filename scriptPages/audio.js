const audio = document.querySelector('#audio')
const html = document.querySelector('html')


html.addEventListener('click', () => {
  if(!audio){
    return
  }
  audio.play()
})