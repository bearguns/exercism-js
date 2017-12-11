'use strict'
class Triangle {
  constructor(a, b, c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  illegal() {
    const sides = [this.sideA, this.sideB, this.sideC];
    return sides.every(side => side === 0) || sides.some(side => side < 0);
  }

  isTriangle() {
    return this.sideA + this.sideB >= this.sideC ||
      this.sideA + this.sideC >= this.sideB ||
      this.sideB + this.sideC >= this.sideA;
  }

  sum(a, b) {
    return a + b;
  }

  kind() {
    if (!this.isTriangle()) {
      throw new Error('Illegal: not a valid triangle.');
    } else if (this.illegal()) {
      throw new Error('Illegal: all sides must be greater than 0');
    } else if (this.equilateral()) {
      return 'equilateral';
    } else if (this.isosceles()) {
      return 'isosceles';
    } else if (this.scalene()){
      return 'scalene';
    }
  }

  equilateral() {
    return this.sideA === this.sideB && this.sideA === this.sideC;
  }

  isosceles() {
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
  }

  scalene() {
    return this.sideA !== this.sideB && this.sideA !== this.sideC;
  }

}

module.exports = Triangle;
