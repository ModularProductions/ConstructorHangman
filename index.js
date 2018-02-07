var inquirer = require("inquirer");
var Word = require("./word.js");
var words = require("./words.js");
var hardcore = require("./hardcore.js");
var gameWord;

function selectWord(library) {
  var selectedWord = library[Math.floor(Math.random() * library.length)];
  console.log("selectedWord =", selectedWord);
  var letters = [];
  for (var i = 0; i < selectedWord.length; i++) {
    letters.push(selectedWord.charAt(i));
  }
  return letters;
}

function playGame() {
  gameWord = new Word(selectWord(words));
  gameWord.display();
  inquirer.prompt([
    {
      name: "letter",
      message: "Guess a letter!"
    }
  ]).then(function(answer) {
    gameWord.letters.forEach(function(value) {
      value.compare(answer);
      console.log("this =", value);
    })
    console.log("gameWord =", gameWord);
    console.log("gameWord.letters =", gameWord.letters);
    gameWord.display();
  })

}

console.log("\nHere we go!");
playGame();
