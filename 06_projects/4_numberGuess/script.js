let randNum = parseInt(Math.random()*100+1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')

const p =document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if(isNaN(guess) || guess<1 || guess>100) {
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess == 10){
            displayGuess(guess)
            checkGuess(guess)
            displayMessage(`Game Over. Random Number was ${randNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess==randNum) {
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randNum){
        displayMessage(`Number is too low`)
    }
    else {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function(e){
        randNum = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
