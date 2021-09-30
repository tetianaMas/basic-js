import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const transformedArray = [...arr];
  const arrLength = arr.length;
  let deleted = false;

  for (let index = 0; index < transformedArray.length; index++) {
    switch (transformedArray[index]) {
      case '--discard-next':
        if (index + 1 < arrLength) {
          transformedArray.splice(index, 2);
          deleted = true;
          index--;
        } else {
          transformedArray.splice(index, 1);
        }
        break;
      case '--discard-prev':
        if (index - 1 > 0 && !deleted) {
          transformedArray.splice(index - 1, 2);
          index -= 2;
        } else {
          transformedArray.splice(index, 1);
        }
        break;
      case '--double-next':
        if (index + 1 < arrLength) {
          transformedArray.splice(index, 1, transformedArray[index + 1]);
        } else {
          transformedArray.splice(index, 1);
        }
        break;
      case '--double-prev':
        if (index - 1 > 0 && !deleted) {
          transformedArray.splice(index, 1, transformedArray[index - 1]);
        } else {
          transformedArray.splice(index, 1);
        }
        break;
    }
  }

  return transformedArray;
}
