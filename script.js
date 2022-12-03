let playGame = confirm("Shall we play paper,scissors,rock?");
if (playGame) {
  let playerInput = prompt("Please enter paper, scissors and rock!");
  if (playerInput) {
    let playerSelection = playerInput.trim().toLowerCase();
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      let computerSelection = computerPlay();
      let computerScore = 0;
      let playerScore = 0;
      function computerPlay() {
        let options = ["rock", "paper", "scissors"];
        return options[
          (randomNum = Math.floor(Math.random() * options.length) + 1)
        ];
      }
      function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
          return prompt(`It is a tie! The score is ${playerScore}:${computerScore}`);
        } else if (playerSelection == "rock") {
          if (computerSelection == "paper") {
            computerScore++;
            prompt(
              `You Lose! Paper beats Rock. The score is ${playerScore}:${computerScore}.`
            );
          } else {
            playerScore++;
            prompt(
              `You Won! Rock beats Scissors. The score is ${playerScore}:${computerScore}.`
            );
          }
        } else if (playerSelection == "paper") {
          if (computerSelection == "rock") {
            playerScore++;
            prompt(
              `You Won! Paper beats Rock. The score is ${playerScore}:${computerScore}."`
            );
          } else {
            computerScore++;
            prompt(
              `You Lose! Scissors beats Paper. The score is ${playerScore}:${computerScore}.`
            );
          }
        } else if (playerSelection == "scissors") {
          if (computerSelection == "rock") {
            computerScore++;
            prompt(
              `You Lose! Rock beats Scissors. The score is ${playerScore}:${computerScore}.`
            );
          } else {
            playerScore++;
            prompt(
              `You Won! Scissors beats Paper. The score is ${playerScore}:${computerScore}.`
            );
          }
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
    } else {
      alert("You didn't enter paper, scissors or rock!");
    }
  } else {
    alert("I guess you changed your mind, maybe next time!");
  }
} else {
  alert("No worries! Maybe next time!");
}
