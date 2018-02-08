function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.alreadyGuessed = false;
  this.toString = function() {
    if (this.char === " ") {
      this.guessed = true;
      return this.char;
    }
    if (this.guessed) {
      return this.char;
    }
    return "_";
  }
  this.compare = function(guessedChar) {
    if (guessedChar.toLowerCase() === this.char) {
      this.guessed = true;
      return true;
    }
  }
}

module.exports = Letter;