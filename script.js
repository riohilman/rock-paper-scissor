function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const result = document.querySelector("#result");
    const score = document.querySelector("#score");
    const btnContainer = document.querySelector("#btn-container");

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
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanScore >= 5 || computerScore >= 5) return; 

        if (humanChoice === computerChoice) {
            result.textContent = "It's a tie";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        score.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

        if (humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? "You win the game!" : "You lose the game!";
            result.textContent = winner;

            const playAgainBtn = document.createElement("button");
            playAgainBtn.textContent = "Play Again";
            playAgainBtn.id = "play-again";
            btnContainer.appendChild(playAgainBtn);

            playAgainBtn.addEventListener("click", () => {
                humanScore = 0;
                computerScore = 0;
                result.textContent = "";
                score.textContent = "";
                playAgainBtn.remove(); 
            });
        }
    }

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    })
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    })

}

playGame();