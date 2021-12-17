import axios from 'axios'

const form = document.querySelector('form')

// Add event listener to submit button. Show response when clicked.
form.addEventListener('submit', (e) => {
  const textInput = document.getElementById('textInput').value

  e.preventDefault()
  if (!textInput.trim().length) return // @TODO: show validation
  buildResponse(textInput)
})

const buildResponse = (keyword) => {
  // get resources
  axios.get('https://raw.githubusercontent.com/18F/charlie/main/config/a11ybot-resources.json')
    .then(response => response.data)
    .then(data => data.filter(link => {
      if (link.keywords.indexOf(keyword) > -1) return true
    }).map(resource => {
      return `<li><a href="${ resource.url }" alt="Link to ${ resource.name }">${ resource.name }</a></li>`
    }).join(''))
    .then(HTMLString => {
      const list = document.createElement('ul')
      const foundText = document.createElement('em')
      const container = document.getElementsByTagName('article')[0]
      const mascot = `<img src="https://emoji.slack-edge.com/T011QM4UN3G/a11y-ally/837f859d42c12db5.png"
          alt="Ally the A11ybot Mascot"/>`
      list.innerHTML = HTMLString
      foundText.innerHTML = `Here's what I found about <strong>"${ keyword }"</strong>`
      container.before(foundText)
      container.innerHTML = mascot
      container.append(list)
    })
    .catch(error => console.log('Error', error))
}
