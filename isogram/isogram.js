var Isogram = function(string) {
  this.string = string;
  this.isIsogram = function() {
    // do some cleanup on our candidate string - no spaces, all lower case
    var stringArray = this.string.toLowerCase().replace(/[\s-,\.]/g,'').split('');

    // test characters in array starting from the second character
    var arrayToTest = stringArray.slice(1, stringArray.length -1);

    // make sure that every character after the first only appears once in the array
    return arrayToTest.every(function(c) {
      return stringArray.slice(0, stringArray.lastIndexOf(c)).indexOf(c) == -1;
    });
  }
};

module.exports = Isogram;
