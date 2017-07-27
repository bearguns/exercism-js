'use strict'
class School {
  constructor() {
    this.fullroster = {};
  }

  roster() {
    return this.fullroster;
  }

  add(name, grade) {
    // check for and add grade if not already in DB
    if (!this.fullroster[grade]) {
      this.fullroster[grade] = [];
    }
    this.fullroster[grade].push(name);
    this.fullroster[grade] = this.fullroster[grade].sort(); // grades are to be kept in alphabetical order
  }

  grade(grade) {
    const roster = this.fullroster[grade];
    if (!roster) {
      return [];
    }
    return roster.sort();
  }
}

module.exports = School;
