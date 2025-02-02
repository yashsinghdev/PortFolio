let user_score = 0;
let AI_score = 0;
let draw = 0;
let total = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");
const userscore = document.querySelector("#user-score");
const AIscore = document.querySelector("#AI-score");
const drawscore = document.querySelector("#Draw-score");

const totalmatch = () => {
  const totalmatch = document.querySelector("#Total");
  total++;
  totalmatch.innerText = total;
};

const drawgame = () => {
  draw++;
  console.log("Draw = ", draw);
  msg.innerText = "Draw! Play Again";
  msg.style.background =
    "linear-gradient(90deg, rgb(165, 42, 128), rgb(237, 10, 146))";
  drawscore.innerText = draw;

  totalmatch();
};

const showwinner = (userwin) => {
  if (userwin) {
    console.log("You win");
    msg.innerText = "You Win!";
    msg.style.background =
      "linear-gradient(90deg, rgb(67, 165, 42), rgb(48, 237, 10))";
    user_score++;
    userscore.innerText = user_score;

    totalmatch();
  } else {
    msg.innerText = "You Lose!";
    AI_score++;
    AIscore.innerText = AI_score;
    msg.style.background =
      "linear-gradient(90deg, rgb(165, 42, 42), rgb(237, 40, 10))";
    totalmatch();
  }
};

const gencomchoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const rand = Math.floor(Math.random() * 3);

  return options[rand];
};
const playgame = (choiceid) => {
  //genrate AI choice .
  const compchoice = gencomchoice();

  if (choiceid === compchoice) {
    drawgame();
  } else {
    if (choiceid === "Rock") {
      //paper,Scissor.
      userwin = compchoice === "Paper" ? false : true;
    } else if (choiceid === "Paper") {
      //Rock,Scissor.
      userwin = compchoice === "Scissor" ? false : true;
    } else {
      userwin = compchoice === "Rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceid = choice.getAttribute("id");

    playgame(choiceid);
  });
});
