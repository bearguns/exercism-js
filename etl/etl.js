'use strict'
class ETL {
  transform(scores) {
    let newScores = {};
    const keys = Object.keys(scores);

    keys.forEach((key) => {
      scores[key].forEach((letter) => {
        newScores[letter.toLowerCase()] = Number(key);
      });
    });

    return newScores;
  }
}

module.exports = ETL;
