let userScore = 0;
let compScore = 0;
const userScoreEl = document.getElementById('user-score')
const compScoreEl = document.getElementById('comp-score')
const scoreBoardEl = document.querySelector('.scoreboard')
const resultEl = document.querySelector('.result > p')
const rockEl = document.getElementById('r')
const paperEl = document.getElementById('p')
const scissorsEl = document.getElementById('s')

const handleCompChoice = () => {
    const choices = ['r', 'p', 's']
    const randomNum = (Math.floor(Math.random() * choices.length))
    return choices[randomNum]
}

const convertToWord = (letter) => {
    if(letter === 'r') return 'Rock'
    if(letter === 'p') return 'Paper'
    if(letter === 's') return 'Scissors'
}

const winGame = (userChoice, compChoice) => {
    userScore += 1
    userScoreEl.innerHTML = userScore
    resultEl.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You Win!`
}

const loseGame = (userChoice, compChoice) => {
    compScore += 1
    compScoreEl.innerHTML = compScore
    resultEl.innerHTML = `${convertToWord(compChoice)} beats ${convertToWord(userChoice)}. You Lose!`
}

const drawGame = (userChoice) => {
    resultEl.innerHTML = `You both picked ${convertToWord(userChoice)}. It's a tie!`
}

const playGame = (userChoice) => {
    const compChoice = handleCompChoice()
    switch(userChoice + compChoice) {
        case('rs'):
        case('pr'):
        case('sp'):
            winGame(userChoice, compChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            loseGame(userChoice, compChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            drawGame(userChoice)
            break;
    }

}


// Event Listeners

rockEl.addEventListener('click', () => {
    playGame('r')
})
paperEl.addEventListener('click', () => {
    playGame('p')
})
scissorsEl.addEventListener('click', () => {
    playGame('s')
})
