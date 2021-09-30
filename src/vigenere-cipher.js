import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(isDirectMachine = true) {
    this.directMachine = isDirectMachine;
    this.lettersHash = this.initLettersHash.apply(VigenereCipheringMachine);
    this.numbersHash = this.initNumbersHash.apply(VigenereCipheringMachine);
  }

  initLettersHash() {
    const LETTERS_NUMBER = 26;
    let lettersHash = {};
    let charCode = 65;

    for (let i = 0; i < LETTERS_NUMBER; i++) {
      lettersHash[String.fromCharCode(charCode)] = i;
      charCode++;
    }

    return lettersHash;
  }

  initNumbersHash() {
    const LETTERS_NUMBER = 26;
    let numbersHash = {};
    let charCode = 65;

    for (let i = 0; i < LETTERS_NUMBER; i++) {
      numbersHash[i] = String.fromCharCode(charCode);
      charCode++;
    }

    return numbersHash;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedPhrase = '';
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < message.length; i++) {
      if (!this.isAlphabetic(message[i])) {
        encryptedPhrase += message[i];
      } else {
        let encryptedHash = this.calculateEncryptedHash(message[i], key, k);

        let encryptedLetter = this.numbersHash[encryptedHash];
        encryptedPhrase += encryptedLetter;
        k++;
      }
    }

    if (!this.directMachine) {
      encryptedPhrase = this.reversePhrase(encryptedPhrase);
    }

    return encryptedPhrase;
  }

  isAlphabetic(letter) {
    return typeof this.lettersHash[letter] === 'number';
  }

  calculateEncryptedHash(letter, key, index) {
    const LETTERS_NUMBER = 26;

    return (
      (this.getMessageLetterHash(letter) + this.getKeyLetterHash(key, index)) %
      LETTERS_NUMBER
    );
  }

  getMessageLetterHash(letter) {
    return this.lettersHash[letter];
  }

  getKeyLetterHash(key, index) {
    return this.lettersHash[key[index % key.length]];
  }

  reversePhrase(word) {
    return word.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedPhrase = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < encryptedMessage.length; i++) {
      if (!this.isAlphabetic(encryptedMessage[i])) {
        decryptedPhrase += encryptedMessage[i];
      } else {
        let decryptedHash = this.calculateDecryptedHash(
          encryptedMessage[i],
          key,
          k
        );

        let decryptedLetter = this.numbersHash[decryptedHash];
        decryptedPhrase += decryptedLetter;
        k++;
      }
    }

    if (!this.directMachine) {
      decryptedPhrase = this.reversePhrase(decryptedPhrase);
    }

    return decryptedPhrase;
  }

  calculateDecryptedHash(letter, key, index) {
    const LETTERS_NUMBER = 26;

    return (
      (this.getMessageLetterHash(letter) -
        this.getKeyLetterHash(key, index) +
        LETTERS_NUMBER) %
      LETTERS_NUMBER
    );
  }
}
