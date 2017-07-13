var Bob = function() {
  this.hey = function(phrase) {
    if(phrase.toUpperCase() === phrase && /[a-zA-Z]+/g.test(phrase)) {
      return "Whoa, chill out!";
    }
    if(phrase[phrase.length -1] === '?') {
      return "Sure.";
    }
    if(!phrase.replace(/ /g,"").length || phrase === '') {
      return "Fine. Be that way!";
    }
    return "Whatever.";
  }
}

module.exports = Bob;
