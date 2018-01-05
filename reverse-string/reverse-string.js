function reverseString(string) {
  let outString = '';
  for (let i = string.length -1; i > -1; i--) {
    outString += string[i];
  }
  return outString;
}

module.exports = reverseString;
