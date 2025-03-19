let userScore = 0;
let compScore = 0;
let drawScore =0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const results = document.querySelector(".results");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
const drawScoreDisplay = document.querySelector("#draw-score");
const reset = document.querySelector("#reset");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const genChoice = Math.floor(Math.random() * 3);
  return options[genChoice];
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    result.innerText = `You Win! Your ${userChoice} beats Computer ${compChoice}`;
    results.style.backgroundColor = "green";
    userScore++;
  } else {
    result.innerText = `You Lose!. Computer ${compChoice} beats Your ${userChoice}`;
    results.style.backgroundColor = "red";
    compScore++;
  }
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (compChoice === userChoice) {
    result.innerText = "Game was a draw. Try again!";
    results.style.backgroundColor = "gray";
    drawScore++;
    drawScoreDisplay.innerText = drawScore;
    return;
  }
  let userWin = true;
  if (userChoice === "rock") {
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    userWin = compChoice === "scissors" ? false : true;
  } else {
    userWin = compChoice === "rock" ? false : true;
  }

  showWinner(userWin,userChoice,compChoice);
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});

//Reset
reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  drawScore = 0;
  drawScoreDisplay.innerText = drawScore;
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
  result.innerText = "Play your move!"
  results.style.backgroundColor = "var(--color1)";
})

//Theme-Change
let btn = document.querySelector("#theme");
let currentMode = "Dark";
let root = document.documentElement;

let themechange = () => {
    if (currentMode === "Dark") {
        currentMode = "Light";
        root.style.setProperty("--color1", "#fefefe");
        root.style.setProperty("--color2", "#282727");
        root.style.setProperty("--color5",  "invert(100%) sepia(6%) saturate(94%) hue-rotate(202deg) brightness(117%) contrast(99%)")
        btn.innerText = "Light";
    } else {
        currentMode = "Dark";
        root.style.setProperty("--color1", "#282727");
        root.style.setProperty("--color2", "#fefefe");
        btn.innerText = "Dark";
    }
};

btn.addEventListener("click", themechange);