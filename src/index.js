import axios from 'axios'

const form = document.querySelector('form')
const textInput = document.getElementById('textInput')
const container = document.getElementsByTagName('article')[0]
const mascot = `<img src="https://emoji.slack-edge.com/T011QM4UN3G/a11y-ally/837f859d42c12db5.png"
          alt="Ally the A11ybot Mascot"/>`
const randomFacts = 'https://raw.githubusercontent.com/18F/charlie-slack-bot-facts/main/a11y-facts.json'
const resourcesJSON = 'https://raw.githubusercontent.com/18F/charlie/main/config/a11ybot-resources.json'

// Add event listener to submit button. Show response when clicked.
form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildResponse(textInput.value)
})

const buildResponse = (keyword) => {
  // get resources
  axios.get(resourcesJSON)
    .then(response => response.data)
    .then(data => data.map(resource => {
      return `<li><a href="${ resource.url }" alt="Link to ${ resource.name }">${ resource.name }</a></li>`
    }).join(''))
    .then(HTMLString => {
      const list = document.createElement('ul')
      list.innerHTML = HTMLString
      container.innerHTML = mascot
      container.append(list)
    })
    .catch(error => console.log(error))
}
