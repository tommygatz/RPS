// Rock, Paper, Scissors Game!


// Begin with computerPlay function to randomly return Rock, Paper, or Scissors
function computerPlay(){
    const rndInt = Math.floor(Math.random() * 3) + 1;
    let a = "";
    switch(rndInt) {
        case 1:
            a = "rock";
            break;
        case 2:
            a = "paper";
            break;
        case 3:
            a = "scissors";
            break;
        default:
            break;
    }
    // console.log("Computer chose: ");
    return a;
}




// Function to ask for input from player and convert to lowercase or "invalid" for later use.

function playerSelect() {
    let playerChoice = window.prompt("Make your choice: Rock, Paper, or Scissors")

    if (playerChoice.toLowerCase() == "rock") {
        playerChoice = "rock";
    } 
    else if (playerChoice.toLowerCase() == "paper") {
        playerChoice = "paper";
    }
    else if (playerChoice.toLowerCase() == "scissors") {
        playerChoice = "scissors";
    }
    else {
        playerChoice = "invalid";
    }
    return playerChoice;
}

// Adding event listeners to the buttons

const buttons = document.querySelectorAll('img'); // buttons is a node list. It looks and acts much like an array.

buttons.forEach((btn) => { // we use the .forEach method to iterate through each image button
  btn.addEventListener('click', () => {   // and for each one we add a 'click' listener
    playRound(btn.id);
  });
});

// Function to play a round (calls both playerSelect() and computerPlay())

var player = 0;
var comp = 0;

function playRound(choice) {
    const computerSelection = computerPlay();
    const playerSelection = choice;
    let decision = "No decision has been made.";
    if (playerSelection !== "invalid"){
        switch(playerSelection) { 
            case "rock":
                if (computerSelection === playerSelection){
                    decision = "It's a tie! You both chose " + playerSelection + ".";
                }
                else if (computerSelection === "paper") {
                    decision = "You lose! " + computerSelection + " beats " + playerSelection + ".";
                    comp++;
                }
                else if (computerSelection === "scissors") {
                    decision = "You win! " + playerSelection + " beats " + computerSelection + ".";
                    player++;
                }
                else {
                    console.log("There was an issue...");
                }
                break;
            case "paper":
                if (computerSelection === playerSelection){
                    decision = "It's a tie! You both chose " + playerSelection + ".";
                }
                else if (computerSelection === "scissors") {
                    decision = "You lose! " + computerSelection + " beats " + playerSelection + ".";
                    comp++;
                }
                else if (computerSelection === "rock") {
                    decision = "You win! " + playerSelection + " beats " + computerSelection + ".";
                    player++;
                }
                else {
                    console.log("There was an issue...");
                }
                break;
            case "scissors":
                if (computerSelection === playerSelection){
                    decision = "It's a tie! You both chose " + playerSelection + ".";
                }
                else if (computerSelection === "rock") {
                    decision = "You lose! " + computerSelection + " beats " + playerSelection + ".";
                    comp++;
                }
                else if (computerSelection === "paper") {
                    decision = "You win! " + playerSelection + " beats " + computerSelection + ".";
                    player++;
                }
                else {
                    console.log("There was an issue...");
                }
                break;
            default:
                console.log("Something went wrong...");
                break;
        }
    }
    else {
        console.log("Please choose a valid input.");
    }
    let results = [decision, player, comp]
    // console.log(results);

    const display = document.getElementById('displayResults');
    display.innerHTML = results[0];

    const score1 = document.getElementById('playerScore');
    score1.innerHTML = results[1];  

    const score2 = document.getElementById('compScore');
    score2.innerHTML = results[2];

    const endGame = document.getElementById('gameOver');

    if (results[1] >= 5) {
        endGame.innerHTML = 'You won the game!';
        player = 0;
        comp = 0;
    }
    else if (results[2] >= 5) {
        endGame.innerHTML = 'You lost the game.';
        player = 0;
        comp = 0;
    }
    else {
        endGame.innerHTML = '';
    }

    return results;
}

// Run the game over a set number of times

// function game() {
//     var playerWins = 0;
//     var computerWins = 0;
//     for (let i = 0; i < 5; i++) {
//         var round = playRound();
//         playerWins = playerWins + round[1];
//         computerWins = computerWins + round[2];
//         console.log("player: " + playerWins + ", computer: " + computerWins);
//         console.log("Round " + (i + 1) + " decision: " + round[0]);
//     }
//     if (playerWins > computerWins) {
//         var winner = "You are the winner of the game! The score was " + playerWins + "-" + computerWins + ".";
//     }
//     else if (playerWins < computerWins) {
//         var winner = "You lost to the computer! The score was " + playerWins + "-" + computerWins + ".";
//     }
//     else {
//         var winner = "The game was a tie!! The score was " + playerWins + "-" + computerWins + ".";
//         }
//     console.log(winner);
//     return;
// }
