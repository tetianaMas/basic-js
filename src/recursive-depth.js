import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.currentDepth = 1;
  }

  calculateDepth(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.currentDepth++;
        if (this.currentDepth > this.depth) {
          this.depth = this.currentDepth;
        }
        this.calculateDepth(item);
        this.currentDepth--;
      }
    });

    if (this.currentDepth === 1) {
      const finalDepth = this.depth;
      this.depth = 1;

      return finalDepth;
    }

    return this.depth;
  }
}
