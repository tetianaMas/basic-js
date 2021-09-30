import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  const RADIX = 10;
  const arrNum = String(n).split('');
  const res = arrNum.reduce(
    (prev, curr) => parseInt(prev, RADIX) + parseInt(curr, RADIX)
  );
  return String(res).split('').length > 1 ? getSumOfDigits(res) : res;
}
