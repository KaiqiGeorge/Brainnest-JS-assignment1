let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[(randomNum = Math.floor(Math.random() * options.length) + 1)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return prompt("It is a tie!");
  } else if (playerSelection == "rock") {
    return computerSelection == "paper"
      ? prompt("You Lose! Paper beats Rock.")
      : prompt("You Won! Rock beats Scissors.");
  } else if (playerSelection == "paper") {
    return computerSelection == "rock"
      ? prompt("You Lose! Paper beats Rock.")
      : prompt("You Won! Scissors beats Paper.");
  } else if (playerSelection == "scissors") {
    return computerSelection == "rock"
      ? prompt("You Lose! Rock beats Scissors.")
      : prompt("You Won! Scissors beats Paper.");
  }
}
function scoreUpdate(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return null;
  } else if (playerSelection == "rock") {
    return computerSelection == "paper" ? computerScore++ : playerScore++;
  } else if (playerSelection == "paper") {
    return computerSelection == "rock" ? computerScore++ : playerScore++;
  } else if (playerSelection == "scissors") {
    return computerSelection == "rock" ? computerScore++ : playerScore++;
  }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
