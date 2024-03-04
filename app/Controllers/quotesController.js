const baseUrl = 'https://api.gameofthronesquotes.xyz/v1/random'

const sentence = document.querySelector('.sentence')
const author = document.querySelector('.author')


const quotes = async () => {
  const data = await getQuotesData()
  if (!data) {
    sentence.textContent = 'Loading...'
    author.textContent = ''
  }
  sentence.innerHTML = data.sentence
  author.innerHTML = data.character.name
}


const getQuotesData = async () => {
  try {
    const response = await fetch(baseUrl)
    const data = await response.json()

    return data
  } catch (e) {
    console.log('erro', e)
  }
}

quotes()