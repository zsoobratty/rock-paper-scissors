let userScore = 0;
let computerScore = 0;
const userScoreEl = document.getElementById('user-score')
const compScoreEl = document.getElementById('comp-score')
const scoreBoardEl = document.querySelector('.scoreboard')
const resultEl = document.querySelector('.result')
const rockEl = document.getElementById('r')
const paperEl = document.getElementById('p')
const scissorsEl = document.getElementById('s')

const handleCompChoice = () => {
    const choices = ['r', 'p', 's']
    const randomNum = (Math.floor(Math.random() * choices.length))
    return choices[randomNum]
}

const playGame = (choice) => {
    const computerChoice = handleCompChoice()
    switch(choice + computerChoice) {
        case('rs'):
        case('pr'):
        case('sp'):
            console.log('User wins')
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('Comp wins')
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log("It's a tie!")
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
