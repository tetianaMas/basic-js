import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (!str) {
    return str;
  }
  const arr = str.split('');
  let res = [];
  let count = 1;

  arr.forEach((elem, index) => {
    if (elem === arr[index + 1]) {
      count++;
    } else {
      res.push(`${count > 1 ? count : ''}${elem}`);
      count = 1;
    }
  });

  return res.join('');
}
