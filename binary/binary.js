class Binary {
  constructor(string) {
    this.number = string;
  }

  toDecimal() {
    const numberToArray = this.number.split('');
    let numberAsDecimal = 0;
    
    for (let i = 0; i < numberToArray.length; i++) {
      let currentDigit = Number(numberToArray[i]);
      if (isNaN(currentDigit) || (currentDigit !== 0 && currentDigit !== 1))
        return numberAsDecimal = 0;

      let power = (numberToArray.length - 1) - i;
      numberAsDecimal += currentDigit * Math.pow(2, power);
    }
    
    return numberAsDecimal;
  }
}

module.exports = Binary;
