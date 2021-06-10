var readlineSync = require("readline-sync");

var score = 0;

// data of high scores of players
var highScores = [
  {
    name: "Husain",
    score: 3,
  },

  {
    name: "Taher",
    score: 2,
  },
]

// questions in objects
var questions = [{
  question: `Which of the following was Sansa never married or engaged to? 
  a: Ramsay Bolton
  b: Loras Tyrell
  c: Tyrion Lannister
  d: Joffrey Baratheon\n`,
  answer: "b"
}, 
{
  question: ` Which of the following is NOT one of Daenerys's dragons?
  a: Aegon
  b: Rhaegal
  c: Drogon
  d: Viserion\n`,
  answer: "a"
},
{
  question: ` Which of the following is NOT one of Daenerys's titles?
  a: Khaleesi
  b: Mother of Dragons
  c: The Unsullied
  d: Breaker of Chains\n`,
  answer: "c"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to the Game Of Thrones quiz!");
  console.log("Answer in letters.")
}


// play function to ask questions and verify answers
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("You are Right!");
    score = score + 1;
    
  } else {
    console.log("That's Wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// a loop to go through each and every question from play function
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


//shows the player's score and the highscore table
function showScores() {
  console.log("Woohoo! You SCORED: ", score);

  console.log("Check out the high scores, if you beat the highscore tell me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


