
let moveArray = ['Rock', "Paper", 'Sccisors']




function playerPlay(playerPick) {

    return playerPick
}

function computerPlay() {
    let randomPick = Math.floor(Math.random() * 3)

    return randomPick

}



const compSelection = document.getElementById('computerSelection')
const compScore = document.getElementById('computerScore')
const pSelection = document.getElementById('playerSelection')
const pScore = document.getElementById('playerScore')
const round = document.getElementById('title')

let computerWins = 0
let playerWins = 0


rounds = 0

function playRound(playerSelection, computerSelection) {
    rounds += 1
    round.textContent = rounds
    computerSelection = computerPlay();
    computerPick = moveArray[computerSelection]

    switch (playerSelection) {
        case computerPick:
            console.log("Tie!")
            compSelection.textContent = computerPick
            pSelection.textContent = playerSelection
            break
        case "Sccisors":
            if (computerPick == 'Rock') {
                console.log('The computer has won!')
                computerWins += 1
                compSelection.textContent = computerPick
                compScore.textContent = computerWins
                pSelection.textContent = playerSelection
                break
            } else {
                console.log('You win!')
                playerWins += 1
                compSelection.textContent = computerPick
                pScore.textContent = playerWins
                pSelection.textContent = playerSelection
                break
            }
        case "Rock":
            if (computerPick == "Paper") {
                console.log("The computer has won")
                computerWins += 1
                compSelection.textContent = computerPick
                compScore.textContent = computerWins
                pSelection.textContent = playerSelection
                break
            } else {
                console.log('You win!')
                playerWins += 1
                compSelection.textContent = computerPick
                pScore.textContent = playerWins
                pSelection.textContent = playerSelection
                break
            }
        case "Paper":
            if (computerPick == "Sccisors") {
                console.log("The computer wins")
                computerWins += 1
                compScore.textContent = computerWins
                compSelection.textContent = computerPick
                pSelection.textContent = playerSelection
                break
            } else {
                console.log('You win!')
                playerWins += 1
                compSelection.textContent = computerPick
                pScore.textContent = playerWins
                pSelection.textContent = playerSelections
                break
            }
    }

}



const buttons = [...document.querySelectorAll('button')]

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.className == 'reset') {
            console.log(e)
            rounds = 0
            computerWins = 0
            playerWins = 0
            pScore.textContent = 0
            compScore.textContent = 0
            compSelection.textContent = "Null"
            pSelection.textContent = "Null"
            round.textContent = 0
        } else {
            playerSelection = button.textContent;
            playRound(playerSelection)
        }
    })
})



