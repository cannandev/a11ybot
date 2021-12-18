import axios from 'axios'

/**
 * Trim text submitted from input box.
 * @param {*} _
 * @returns keyword
 */
const getKeyword = _ => {
  const textInput = document.getElementById('textInput')
  const keyword = textInput.value
  // @TODO: show validation text on input
  if (!keyword.trim().length) return

  return keyword
}

/**
 * Display text below input box that user needs to input some text.
 * Remove text once user types in box.
 * @param {*} _
 */
const showValidationError = _ => {
  console.log(`Please enter text in the input box.`)
}

/**
 *
 * @param {*} keyword
 * @param {*} data
 * @returns Formatted list of links, filtered by keyword matches.
 */
const filterResources = (keyword, data) => {
  return data.filter(link => {
    if (link.keywords.indexOf(keyword) > -1) return true
  }).map(resource => {
    return `<li><a href="${ resource.url }" alt="Link to ${ resource.name }">${ resource.name }</a></li>`
  }).join('')
}

/**
 * Display list of resource links found. If none found, show menu of resources.
 * @param {*} HTMLString string returned by filterResources(keyword, data)
 */
const buildList = HTMLString => {
  const list = document.createElement('ul')
  const container = document.getElementsByTagName('article')[0]
  const foundTextWrapper = document.createElement('em')
  const mascot = `<img src="https://emoji.slack-edge.com/T011QM4UN3G/a11y-ally/837f859d42c12db5.png"
          alt="Ally the A11ybot Mascot"/>`
  const keyword = getKeyword()
  const foundText = (HTMLString.length > 0) ? `Here's what I found about <strong>"${ keyword }"</strong>` : `I couldn't find anything about <strong>"${ keyword }"</strong>`

  list.innerHTML = HTMLString
  foundTextWrapper.innerHTML = foundText
  container.innerHTML = mascot
  container.append(foundText)
  container.append(list)
}

/**
 * Connect to external JSON of resources and get list of resources.
 * @param {*} keyword
 */
const getResources = (keyword) => {
  axios.get('https://raw.githubusercontent.com/18F/charlie/main/config/a11ybot-resources.json')
    .then(response => response.data)
    .then(data => filterResources(keyword, data))
    .then(HTMLString => buildList(HTMLString))
    .catch(error => console.log('Error', error))
}

/**
 *
 * Event listener on form submit button. If no search text, show validation error.
 * If text finds a match, show resources.
 */
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {

  e.preventDefault()
  const textInput = getKeyword()
  if (!textInput) { showValidationError() }
  else { getResources(textInput) }
})

