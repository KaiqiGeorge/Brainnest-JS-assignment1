alert("Welcome to the Paper, Scissors and Rock game!");
alert("You will be playing 3 rounds, it will show the result each round. If you won or it is a tie, you get one point. Final score will show in the end.");
alert("Are you ready? Let's get it started :)");
let computerScore = 0;
let playerScore = 0;
let playerInput = prompt("Please enter 'paper','scissors' or 'rock'.");
let playerSelection = playerInput.trim().toLowerCase();

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[(randomNum = Math.floor(Math.random() * options.length) + 1)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" ||playerSelection == "rock" || playerSelection == "scissors") {
    if (playerSelection == computerSelection) {
      computerScore++;
      playerScore++;
      prompt(`It is a tie! The score is ${playerScore}:${computerScore}`);
    } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        computerScore++;
        prompt(
          `You lose! Scissors beats Paper! The score is ${playerScore}:${computerScore}.`
        );
      } else if (computerSelection == "Rock") {
        playerScore++;
        prompt(
          `You won! Paper beats Rock! The score is ${playerScore}:${computerScore}.`
        );
      }
    } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        computerScore++;
        prompt(
          `You lose! Paper beats Rock! The score is ${playerScore}:${computerScore}.`
        );
      } else if (computerSelection == "scissors") {
        playerScore++;
        prompt(
          `You won! Rock beats Scissors! The score is ${playerScore}:${computerScore}.`
        );
      }
    } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        computerScore++;
        prompt(
          `You lose! Rock beats Scissors! The score is ${playerScore}:${computerScore}.`
        );
      } else if (computerSelection == "paper") {
        playerScore++;
        prompt(
          `You won! Paper beats Scissors! The score is ${playerScore}:${computerScore}.`
        );
      }
    }
  } else {
    prompt(
      "You didn't input a valid option. Please enter 'paper','scissors' or 'rock'."
    );
    playRound();
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerPlay());
  }
  if (playerScore > computerScore) {
    return alert(
      `Game Over! You Won! The final score is ${playerScore} :${computerScore}`
    );
  } else {
    return alert(
      `Game Over! You Lose! The final score is ${playerScore} :${computerScore}`
    );
  }
}

game();
