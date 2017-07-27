'use strict'
const bigInt = require('./big-integer.js');

class Grains {
  constructor() {
    this.chessboard = Array.apply(null, Array(64));
    this.chessboard.forEach((val, index) => {
      this.chessboard[index] = index === 0 ? '1' : this.doubleInt(bigInt(this.chessboard[index -1]));
    });
  }

  doubleInt(num) {
    return bigInt(num).times(2).toString();
  }

  square(index) {
    return bigInt(this.chessboard[index -1]).toString();
  }

  total() {
    let total = bigInt(0);
    this.chessboard.forEach(value => total = bigInt(total).add(bigInt(value)));
    return total.toString();
  }
}

module.exports = Grains;
