function getComputerChoice() {
    let computerChoice;
    let number = Math.random();
    if (number < 0.33) {
        return computerChoice = "Rock";
    } else if (number < 0.67) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissor";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice")
}

console.log(getHumanChoice())
