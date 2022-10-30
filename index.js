const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const selectionItems = document.querySelectorAll(".btn");
const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");
const resultsContainer = document.querySelector(".results-container");
const buttonsContainer = document.querySelector(".buttons-container");
const selectionContainer = document.querySelector(".selection-container");
const result = document.querySelector(".result");
const result2 = document.querySelector(".result-2");
const result3 = document.querySelector(".result-3");
const resetButton = document.querySelector(".reset-btn");

const selection = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

/// Computer Round ///
const computerSelection = function (selection) {
  return selection[Math.floor(Math.random() * selection.length)];
};

/// Reset game ///
const resetGame = function () {
  playerScore = 0;
  computerScore = 0;
  scoreComputer.textContent = 0;
  scorePlayer.textContent = 0;
  buttonsContainer.classList.remove("hidden");
  resultsContainer.classList.add("hidden");
};

/// Stop the game when the score reaches 5 points///
const stopGame = function () {
  buttonsContainer.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
};

/// Play the game ///
const game = function () {
  selectionItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      let playerChoice = e.currentTarget.id;
      let computerChoice = computerSelection(selection);
      if (playerChoice === computerChoice) {
        playerScore += 1;
        computerScore += 1;
      } else if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        playerScore += 1;
      } else {
        computerScore += 1;
      }
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = playerScore;

      /// Display result ///
      if (playerScore >= 5) {
        stopGame();
        result.classList.remove("hidden");
      } else if (computerScore >= 5) {
        stopGame();
        result2.classList.remove("hidden");
      } else if (playerScore === 5 && computerScore === 5) {
        stopGame();
        result3.classList.remove("hidden");
      }

      /// Reset Game ///
      resetButton.addEventListener("click", function () {
        resetGame();
      });
    });
  });
};

game();
