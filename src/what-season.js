import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (
    typeof date !== 'object' ||
    date.hasOwnProperty('toString') ||
    new Date(date).toString() === 'Invalid Date'
  ) {
    throw new Error('Invalid date!');
  }

  const CURRENT_MONTH = date.getMonth();

  if (CURRENT_MONTH >= 2 && CURRENT_MONTH <= 4) {
    return 'spring';
  } else if (CURRENT_MONTH >= 5 && CURRENT_MONTH <= 7) {
    return 'summer';
  } else if (CURRENT_MONTH >= 8 && CURRENT_MONTH <= 10) {
    return 'fall';
  } else {
    return 'winter';
  }
}
