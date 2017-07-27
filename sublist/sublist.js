'use strict'
class List {
  constructor(list = []) {
    this.list = list;
  }
  compare(list) {
    const listA = this.list.toString();
    const listB = list.list.toString();
    if (listA === listB) {
      return 'EQUAL';
    } else if (listA.includes(listB)) {
      return 'SUPERLIST';
    } else if (listB.includes(listA)) {
      return 'SUBLIST';
    } else {
      return 'UNEQUAL';
    }
  }
}
module.exports = List;

