var FoodChain = function() {
  this.animalenum = { 1: "fly", 2: "spider", 3: "bird", 4: "cat", 5: "dog", 6: "goat", 7: "cow", 8: "horse" };
  this.animallines = {
    "fly": { swallowed: null,  why: "\nI don't know why she swallowed the fly. Perhaps she'll die.\n" },
    "spider": { swallowed: "\nIt wriggled and jiggled and tickled inside her.", why: "\nShe swallowed the spider to catch the fly." },
    "bird": { swallowed: "\nHow absurd to swallow a bird!", why: "\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her." },
    "cat": { swallowed: "\nImagine that, to swallow a cat!", why: "\nShe swallowed the cat to catch the bird." },
    "dog": { swallowed: "\nWhat a hog, to swallow a dog!", why: "\nShe swallowed the dog to catch the cat." },
    "goat": { swallowed: "\nJust opened her throat and swallowed a goat!", why: "\nShe swallowed the goat to catch the dog." },
    "cow": { swallowed: "\nI don't know how she swallowed a cow!", why: "\nShe swallowed the cow to catch the goat." },
    "horse": { swallowed: null, why: "\nShe's dead, of course!\n" }
  }
}

FoodChain.prototype.verse = function(num) {
  var self = this;
  var animal = self.animalenum[num];
  var swallowed = self.animallines[animal]["swallowed"];
  var why = self.animallines[animal]["why"];
  var verse = "I know an old lady who swallowed a " + animal + ".";

  verse += swallowed ? swallowed : '';
  verse += why;

  if (num > 1 && num < 8) {
    for (var i = num - 1; i > 0; i--) {
      var nextanimal = self.animalenum[i];
      var nextline = self.animallines[nextanimal]["why"];
      verse += nextline;
    }
  }

  return verse;
}

FoodChain.prototype.verses = function(a, b) {
  var self = this;
  var song = "";

  for (var i = Math.min(a, b); i < Math.max(a, b) + 1; i++) {
    song += self.verse(i) + "\n";
  }
  return song;
}

module.exports = FoodChain;
