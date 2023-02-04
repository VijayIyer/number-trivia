let intervalId;

const startTrivia = ()=>{
    intervalId = setInterval(()=>{
        console.log(`running random trivia fetch`);
    const options = {
      method: 'GET',
      url: 'https://numbersapi.p.rapidapi.com/random/trivia',
      params: {json: 'true', fragment: 'true', max: '20', min: '10'},
      headers: {
        'X-RapidAPI-Key': '0801df59camsh56e63953b482cb9p17834bjsnb182793f34bc',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };
    
    axios.request(options).
    then(function (response) {
        console.log(`${JSON.stringify(response.data)}`);
        document.querySelector('#triviaMainFact').innerHTML = response.data.number;
        document.querySelector('#triviaExplanation').innerHTML = response.data.text;
    }).catch(function (error) {
        alert(error);
    });
    }, 5000);
}


document.querySelector('#startTriviaButton').addEventListener('click', ()=>{
    startTrivia();
});
document.querySelector('#stopTriviaButton').addEventListener('click', ()=>{
    clearInterval(intervalId);
});