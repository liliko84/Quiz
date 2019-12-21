var timeLeft = document.querySelector("#time-left");
var startScreen = document.querySelector("#start-screen");
var startGameBtn = document.querySelector("#start-game-btn");
var quizContent = document.querySelector("#quiz-content");
var postGameScreen = document.querySelector("#post-game-screen");
var userScore = document.querySelector("#user-score");
var playAgainBtn = document.querySelector("#play-again-btn");
var questionLine = document.querySelector("#question-line");
var optionBox = document.querySelector("#option-box");

var secondsLeft = 30;
var qIndex = 0;
var timerIntervalId;

startGameBtn.onclick = start
playAgainBtn.onclick = start

function start() {
  secondsLeft = 30;
  qIndex = 0;

  startScreen.classList.add("hide")
  quizContent.classList.remove("hide")
  // display first question
  displayQuestion(qIndex);

  startTimer();
}
// set timerIntervalId to setInterval function that decrements secondsLeft every second
function startTimer() {
  timerIntervalId = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft
    if (secondsLeft <= 0) {
      console.log("Write stop game function")
      clearInterval(timerIntervalId)
    }
  }, 1000);
}

// create function to display a question and possible choices
function displayQuestion() {
  var q = questions[qIndex]
  // check if questionIndex in questions array doesn't exist
  if (!q) {
    // stop game, we've hit last question
    return stopGame();
  }

  questionLine.textContent = q.question;
  console.log(q)
  optionBox.innerHTML = "";
  for (var i = 0; i < q.choices.length; i++) {
    var btn = document.createElement("button");
    btn.classList.add("optionBtn")
    btn.textContent = q.choices[i]
    btn.value = q.choices[i]
    btn.onclick = answerTheQuestion

    optionBox.appendChild(btn)
  }
}

function answerTheQuestion() {
  if(this.value === questions[qIndex].answer){
    console.log("Correct")
    secondsLeft += 5
  } else {
    secondsLeft -= 5
    console.log("Incorrect!")
  }

  qIndex++;
  displayQuestion();
}

function stopGame() {
  console.log("Game Over!")
  clearInterval(timerIntervalId);
  quizContent.classList.add("hide");
  postGameScreen.classList.remove("hide");
}






// create function to handle users answering
// use event delegation to make sure button was clicked
// read data attribute of what question we answered (index)
// check to see if choice picked is same as questions correct answer
// if yes, increase score++
// if no, subtract time from secondsLeft

// get index of next question (this question's index + 1)
// run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
// clearInterval() to stop the timer
// hide quiz-content element
// show post-game-screen
// print out user score



// add event listeners
// start game button (for starting the game)
// quizcontent (for answering a question) -> use event delegation
// play again button (for starting the game)


