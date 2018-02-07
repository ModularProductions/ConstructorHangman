function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.toString = function() {
    if (this.guessed) {
      return this.char;
    }
    return "_";
  }
  this.compare = function(guessedChar) {
    if (guessedChar.toUpperCase() === this.char) {
      this.guessed = true;
    }
  }
}

module.exports = Letter;