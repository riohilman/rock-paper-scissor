function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let number = Math.random();
        if (number < 1/3) {
            return "rock";
        } else if (number < 2/3) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    
    function getHumanChoice() {
        return prompt("Enter your choice: rock, paper or scissors")
    }
    

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log("It's a tie")
        } else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`Congratulation brother. You are a winner!`);
    } else if (computerScore > humanScore) {
        console.log("What are you doing?! You lose the game");
    } else {
        console.log("Tie game");
    }
}

playGame();