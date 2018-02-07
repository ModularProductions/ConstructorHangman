var Letter = require("./letter.js");

function Word(arr) {
  var newArray = [];
  arr.forEach(function(newLetter) {
    var z = new Letter(newLetter);
    newArray.push(z);
  });
  this.letters = newArray;
  this.display = function() {
    var str = "";
    this.letters.forEach(function(letter) {
      str += (letter.toString() + " ");
    });
    console.log(str);
  }
}

module.exports = Word;


// var a = new Letter("a");
// var b = new Letter("b");
// var c = new Letter("c");

// var word = new Word("punk");

// word.display();