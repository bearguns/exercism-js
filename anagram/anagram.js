var Anagram = function(word) {
  this.word = word;
}

Anagram.prototype.matches = function(match) {
  var self = this;

  var base = self.word;
  var results = [];

  if (arguments.length > 1) {
    var matches = Array.prototype.slice.call(arguments);
    matches.forEach(function(m) {
      if (self.isAnagram(base, m)) {
        results.push(m);
      };
    });
    return results;
  }
  else if (typeof match === "object") {
    match.forEach(function(m) {
      if (self.isAnagram(base, m)) {
        results.push(m);
      };
    });
    return results;
  }
  else {
    if (self.isAnagram(base, match)) {
      results.push(match);
    };
    return results;
  }
}

Anagram.prototype.isAnagram = function(base, match) {
  var base = base.toLowerCase();
  var match = match.toLowerCase();
  var sortbase = base.toLowerCase().split("").sort();
  var sortmatch = match.toLowerCase().split("").sort();

  if (base === match) {
    return false;
  }

  if (sortbase.length != sortmatch.length) {
    return false;
  }

  for (var i = 0; i < sortbase.length; i++) {
    if (sortbase[i] != sortmatch[i]) {
      return false;
    }
  }

  return true;
}

module.exports = Anagram;
