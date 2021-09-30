import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let counter = 0;
  const maxRowLength = matrix[0].length;

  for (let j = 0; j < maxRowLength; j++) {
    for (let i = 0; i < matrix.length; i++) {
      const number = matrix[i][j];
      if (number === 0) {
        break;
      } else {
        counter += number;
      }
    }
  }

  return counter;
}
