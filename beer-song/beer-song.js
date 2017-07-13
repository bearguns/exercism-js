var BeerSong = function() {
  this.actions = {
    onemore: "\nTake it down and pass it around, ",
    nomore: "\nGo to the store and buy some more, ",
    def: "\nTake one down and pass it around, "
  }
}

BeerSong.prototype.actionBuilder = function(num) {
  var self = this;
  switch(num) {
    case 0:
      return self.actions.nomore;
      break;
    case 1:
      return self.actions.onemore;
      break;
    default:
      return self.actions.def;
      break;
  }
}

BeerSong.prototype.howManyBottles = function(num) {
  var self = this;
  switch(num) {
    case 0:
      return "No more bottles of beer";
      break;
    case 1:
      return "1 bottle of beer";
      break;
    default:
      return num + " bottles of beer";
      break;
  }
}

BeerSong.prototype.nextVerse = function(num) {
  var self = this;
  var nextAmt = num - 1;
  var ofBeer = " on the wall.\n";
  var next
  switch(nextAmt) {
    case -1:
      next = self.howManyBottles(99) + ofBeer;
      break;
    default:
      next = self.howManyBottles(nextAmt) + ofBeer;
      break;
  }
  return next.toLowerCase(); 
}

BeerSong.prototype.songBuilder = function(num) {
  var self = this;
  var action = self.actionBuilder(num);
  var bottles = self.howManyBottles(num);
  var next = self.nextVerse(num); 
  return bottles + " on the wall, " + bottles.toLowerCase() + "." + action + next;
}

BeerSong.prototype.verse = function(num) {
  var self = this;
  return self.songBuilder(num);
}

BeerSong.prototype.sing = function() {
  var self = this;
  var args = [].slice.call(arguments);
  var song = ''; 

  // for a single number, sing every verse starting from that number
  if (args.length === 1) {
    var i = args[0];
    while(i > -1) {
      i != 0 ? song += self.songBuilder(i) + "\n" : song += self.songBuilder(i);
      i--;
    }
    return song;
  } 

  args.forEach(function(arg) {
    if (arg === args[args.length -1]) {
      song += self.songBuilder(arg);
    } else {
      song += self.songBuilder(arg) + "\n" + self.songBuilder(arg - 1) + "\n";
    }
  });
  return song;
}

module.exports = BeerSong;
