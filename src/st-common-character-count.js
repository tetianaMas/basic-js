import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const firstArr = s1.split('');
  const secondArr = s2.split('');
  let counter = 0;

  firstArr.forEach(currentLetter => {
    const commonLetter = secondArr.find(letter => letter === currentLetter);
    if (commonLetter) {
      counter++;
      secondArr.splice(secondArr.indexOf(commonLetter), 1);
    }
  });

  return counter;
}
