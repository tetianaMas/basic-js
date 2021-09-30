import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const temp = [];

  arr.forEach((item, index) => {
    if (item === -1) {
      temp.push(index);
    }
  });
  const res = arr.filter(num => num !== -1).sort((a, b) => a - b);
  temp.forEach(elem => {
    res.splice(elem, 0, -1);
  });

  return res;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
