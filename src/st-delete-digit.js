import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let biggestNum = 0;
  const numberArray = String(n).split('');

  numberArray.forEach((num, index, array) => {
    const numberArrayCopy = [...array];

    numberArrayCopy.splice(index, 1);
    const currentDiff = Number(numberArrayCopy.join(''));

    if (currentDiff > biggestNum) {
      biggestNum = currentDiff;
    }
  });

  return biggestNum;
}
