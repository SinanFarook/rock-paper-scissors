// Variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

// choice for rock,paper or scissors
function getComputerChoice() {
    // using sets of 0.3 as condition for math.random
    let choice = Math.random();
    if (choice <= 0.33)
        choice = "rock";
    else if (choice >= 0.66)
        choice = "scissors";
    else
        choice = "paper";
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

// play 1 round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    //human = rock
    if (humanChoice === "ROCK") {
        if (computerChoice === "rock") {
            console.log("This round is a draw!");
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    //human = paper
    else if (humanChoice === "PAPER") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("This round is a draw!");
        }
        else {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    }
    //human = scissors
    else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
        else {
            console.log("This round is a draw!");
        }
    }
}

function playGame() {
    let humanSelection;
    let computerSelection;
    let round = 1;
    while (round < 6) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Score after " + round + " rounds: " + humanScore);
        console.log("Computer Score after " + round + " rounds: " + computerScore);
        round++;
    }
    if (humanScore > computerScore)
        console.log("Congratulations! You win with a score of " + humanScore);
    else if (humanScore < computerScore)
        console.log("Computer wins with a score of " + computerScore);
    else
        console.log("This game is a draw");
}

playGame();