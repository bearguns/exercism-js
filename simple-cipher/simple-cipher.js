class Cipher {
  constructor(key) {
    if (/[A-Z][0-9]/g.test(key)) {
      throw Error('Bad key');
    } 

    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.key = key || this.keyGen();
  }

  keyGen() {
    let key = {};
    for(let i in this.alphabet) {
      let randomChar = this.alphabet.charAt(Math.floor(Math.random() * 26));
      if (!key[randomChar]) {
        key[]
      }
    }
    return key;
  }

  encode(plaintext) {
    // for each letter in key, return letter shifted up by alphabet.indexOf(plaintext[letterIndex])
    return key
      .split('')
      .map((char, i) => {
        let shift = this.alphabet.indexOf(plaintext[i])
      })
      .join('');
  }

  decode(ciphertext) {
    return ciphertext
      .split('')
      .map((char, i) => {
        const shift = this.alphabet.indexOf(char);
        return this.key[(i - shift) % 26];
      })
      .join('');
  }
}

module.exports = Cipher;
