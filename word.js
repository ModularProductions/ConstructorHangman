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
    console.log("\n"+str+"\n");
  }
}

module.exports = Word;
