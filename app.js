let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.getElementById("result");

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  updateScore(result, userChoice, computerChoice);
}

function getComputerChoice() {
  const choices = ["stone", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) return "draw";

  if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScore(result, userChoice, computerChoice) {
  if (result === "win") {
    userScore++;
    result_div.innerText = `You win! ${format(userChoice)} beats ${format(computerChoice)}.`;
  } else if (result === "lose") {
    computerScore++;
    result_div.innerText = `You lose! ${format(computerChoice)} beats ${format(userChoice)}.`;
  } else {
    result_div.innerText = `It's a draw! You both chose ${format(userChoice)}.`;
  }
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
}

function format(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
