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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // play 1 round
    function playRound(humanChoice, computerChoice) {
        // making choice case insensitive
        humanChoice = humanChoice.toLowerCase();
        // Draw scenario
        if (humanChoice === computerChoice) {
            console.log(`Draw! You both chose ${computerChoice}`);
        }
        // Win Scenario
        else {
            if (humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            else if (computerChoice === "rock" && humanChoice === "scissors" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissors" && humanChoice === "paper") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }
    }
    let humanSelection;
    let computerSelection;
    let round = 1;
    while (round < 6) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`After ${round} Rounds: Human Score-${humanScore} | Computer Score-${computerScore}`);
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