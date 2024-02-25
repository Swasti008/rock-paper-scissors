let userSelected = document.getElementById("user-selected-choice");
let computerSelected = document.getElementById("computer-selected-choice");

const options = document.querySelectorAll(".option");

let userScore = 0;
let computerScore = 0;

options.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedOption = option.getAttribute("data-option");
    userSelected.innerHTML = `<img src="./assets/${selectedOption}-hand.png">`;
    const computerOptions = ["rock", "paper", "scissors"];
    const computerChoice =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];
    computerSelected.innerHTML = `<img src="./assets/${computerChoice}-hand.png">`;
    updateScore(selectedOption, computerChoice);
  });
});

function updateScore(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    showScore();
    showResult();
  } else if (userChoice === computerChoice) {
    console.log(`It's a tie`);
  } else {
    computerScore++;
    showScore();
    showResult();
  }
}

function showScore() {
  document.getElementById("user").textContent = userScore;
  document.getElementById("computer").textContent = computerScore;
}

function showResult() {
  if (userScore === 5 || computerScore === 5) {
    let resultMessage;
    if (userScore === 5) {
      resultMessage = "🚀Congratulations! You won the game!🚀";
    } else {
      resultMessage = "Oops!Tough Luck😔 Computer won the game!";
    }
    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = resultMessage;
    popup.style.display = "block";
  }
}

document.getElementById("restartButton").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
  reset();
});

function reset() {
  userScore = 0;
  computerScore = 0;
  showScore();
  userSelected.innerHTML = "";
  computerSelected.innerHTML = "";
}
