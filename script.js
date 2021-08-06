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
            console.log("Error: invalid choice");
            break;
    }
    // console.log("Computer chose: ");
    return a;
}




// Create function to take that input and compare it against the computerPlay function

function playerSelect() {
    let b = window.prompt("Make your choice: Rock, Paper, or Scissors")

    if (b.toLowerCase() == "rock") {
        b = "rock";
    } 
    else if (b.toLowerCase() == "paper") {
        b = "paper";
    }
    else if (b.toLowerCase() == "scissors") {
        b = "scissors";
    }
    else {
        b = "invalid";
    }
    return b;
}

// Function to play a round (calls both playerSelect() and computerPlay())

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerSelect();
    // var player = 0;
    // var comp = 0;
    let decision = "No decision has been made.";
    if (playerSelection !== "invalid"){
        switch(playerSelection) { 
            case "rock":
                if (computerSelection === playerSelection){
                    decision = "It's a tie! You both chose " + playerSelection;
                }
                else if (computerSelection === "paper") {
                    decision = "You lose! " + computerSelection + " beats " + playerSelection;
                    // comp++;
                }
                else if (computerSelection === "scissors") {
                    decision = "You win! " + playerSelection + " beats " + computerSelection;
                    // player++;
                }
                else {
                    console.log("There was an issue...");
                }
                break;
            case "paper":
                if (computerSelection === playerSelection){
                    decision = "It's a tie! You both chose " + playerSelection;
                }
                else if (computerSelection === "scissors") {
                    decision = "You lose! " + computerSelection + " beats " + playerSelection;
                    // comp++;
                }
                else if (computerSelection === "rock") {
                    decision = "You win! " + playerSelection + " beats " + computerSelection;
                    // player++;
                }
                else {
                    console.log("There was an issue...");
                }
                break;
            case "scissors":
                if (computerSelection === playerSelection){
                    decision = "It's a tie! You both chose " + playerSelection;
                }
                else if (computerSelection === "rock") {
                    decision = "You lose! " + computerSelection + " beats " + playerSelection;
                    // comp++;
                }
                else if (computerSelection === "paper") {
                    decision = "You win! " + playerSelection + " beats " + computerSelection;
                    // player++;
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
    return decision;
}

function game() {
    // var playerWins = 0;
    // var computerWins = 0;
    for (let i = 0; i < 5; i++) {
        var round = playRound();
        // playerWins = playerWins + player;
        // computerWins = computerWins + comp;
        console.log("Round " + (i + 1) + " decision: " + round);
    // }
    // if (playerWins > computerWins) {
    //     let winner = "You are ";
    // }
    // else {
    //     let winner = "The computer is ";
    }
    console.log("Game Over! Run game() again to play.");
    return;
}
