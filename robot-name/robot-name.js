'use strict'
const NAME_DB = [];
class RobotName {
  constructor() {
    this.name = this.randomName();
  }

  randomLetter() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')[this.randomInt(0, 25)];
  }

  randomInt(low, high) {
    const min = Math.ceil(low);
    const max = Math.floor(high);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomName() {
    return `${this.randomLetter()}${this.randomLetter()}${this.randomInt(0,9)}${this.randomInt(0,9)}${this.randomInt(0,9)}`;
  }

  reset() {
    let newname = this.returnUnique();

    this.name = newname;
  }

  returnUnique() {
    let name = this.randomName();

    if (NAME_DB.indexOf(name) > -1) {
      return this.returnUnique();
    }

    NAME_DB.push(this.name);
    return name;
  }

}

module.exports = RobotName;
