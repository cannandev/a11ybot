// import axios from '../axios'
const submitButton = document.getElementById('submitButton');
const textInput = document.getElementById('textInput');
const container = document.getElementsByTagName('article')[0];
const mascot = `<img src="https://emoji.slack-edge.com/T011QM4UN3G/a11y-ally/837f859d42c12db5.png"
          alt="Ally the A11ybot Mascot"/>`;
const randomFacts = 'https://raw.githubusercontent.com/18F/charlie-slack-bot-facts/main/a11y-facts.json';
const resources = 'https://raw.githubusercontent.com/18F/charlie/main/config/a11ybot-resources.json';
// Add event listener to submit button. Show response when clicked.
submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const response = document.createElement('p');
    response.innerHTML = getResponse(textInput.value);
    container.innerHTML = mascot;
    container.append(response);
});
const getResponse = (keyword)=>{
    // get resources
    // axios.get(resources)
    //   .then(response => {
    //     // handle success
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     // handle error
    //     console.log(error)
    //   })
    //   .then(() => {
    //     // always executed
    //   })
    // filter. if keyword matches, spit out array of resources
    return keyword;
};

//# sourceMappingURL=index.017db2f2.js.map
