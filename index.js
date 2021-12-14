// import axios from 'axios'

const submitButton = document.getElementById('submitButton')
const textInput = document.getElementById('textInput')
const container = document.getElementsByTagName('article')[0]
const mascot = `<img src="https://emoji.slack-edge.com/T011QM4UN3G/a11y-ally/837f859d42c12db5.png"
          alt="Ally the A11ybot Mascot"/>`
const randomFacts = 'https://raw.githubusercontent.com/18F/charlie-slack-bot-facts/main/a11y-facts.json'
const resources = 'https://raw.githubusercontent.com/18F/charlie/main/config/a11ybot-resources.json'

// Add event listener to submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  let response = document.createElement('p')
  response.innerHTML = textInput.value // new function getResponse(textInput.value)
  container.innerHTML = mascot
  container.append(response)
})

