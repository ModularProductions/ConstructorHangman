var inquirer = require("inquirer");
var color = require('bash-color');
var Word = require("./word.js");
var library = require("./library.js");
var gameWord;
var guessStatus = "";
var score = 0;


function selectWord(library) {
  var selectedWord = library[Math.floor(Math.random() * library.length)];
  var letters = [];
  for (var i = 0; i < selectedWord.length; i++) {
    letters.push(selectedWord.charAt(i));
  }
  return letters;
}

function playGame() {
  gameWord = new Word(selectWord(library));
  var strikes = 8;
  gameWord.display();
  function playRound() {
    inquirer.prompt([
      {
        name: "guessedChar",
        message: "Guess a letter!"
        // validate option
      }
    ]).then(function(answer) {
      if (answer.guessedChar === "exit") {console.log(""); return};
      if (answer.guessedChar.length > 1 ) {
        console.log("\nEnter a single letter only, please.\n");
        playRound();
        return;
      }
      guessStatus = color.red("Incorrect!");
      for (var i = 0; i < gameWord.letters.length; i++) {
        if (gameWord.letters[i].compare(answer.guessedChar) === true) {
          if (gameWord.letters[i].alreadyGuessed === true) {
            guessStatus = color.yellow("You've already guessed that letter!");
          } else {
            guessStatus = color.green("Correct!");
            gameWord.letters[i].alreadyGuessed = true;
          }
        }
      }
      gameWord.display();
      console.log(guessStatus,"\n");
      if (guessStatus === color.red("Incorrect!")) {
        strikes--;
        if (strikes === 0) {
          console.log(color.red("You've lost! Game over.\n", true));
          return;
        }
        console.log(color.red(strikes, true)+color.red(" guesses remaining!\n"));
      }
      function isGuessed(value) {
        if (value.guessed) {
          return true;
        }
      }
      if (gameWord.letters.every(isGuessed)) {
        score++;
        console.log(color.green("You've won ", true)+color.blue(score)+color.green(" games! Here's the next word. (Type 'exit' to quit.)", true));
        playGame();
      } else {
        playRound();
      }
    })
  }
  playRound();
}

console.log("\nHere we go! (Type 'exit' to quit.)");
playGame();
