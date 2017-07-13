//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
    this.year = input;
};

Year.prototype.isLeap = function() {
    if(this.year % 100 === 0) {
        return this.year % 400 === 0 ? true : false;
    }
    return this.year % 4 === 0;
};

module.exports = Year;
