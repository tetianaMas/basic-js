import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  const CURRENT_ACTIVITY = parseFloat(sampleActivity, 10);

  if (
    !CURRENT_ACTIVITY ||
    CURRENT_ACTIVITY > MODERN_ACTIVITY ||
    CURRENT_ACTIVITY <= 0
  ) {
    return false;
  }

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / CURRENT_ACTIVITY) / (Math.LN2 / HALF_LIFE_PERIOD)
  );
}
