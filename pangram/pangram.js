var Pangram = function (input) {
  this.input = input;
  this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  this.isPangram = function () {
    var str = this.input.replace(" ","").toLowerCase();
    var result = false;
    if (str === "") return result;

    for (var i = 0; i < this.alphabet.length -1; i++) {
      if (str.indexOf(this.alphabet[i]) < 0) {
        result = false;
        break;
      } else {
        result = true;
      }
    }

    return result;
  }
}

module.exports = Pangram;