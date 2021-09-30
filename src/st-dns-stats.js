import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if (!Array.isArray(domains)) {
    return false;
  }

  const result = {};
  const arr = domains.map(domain => domain.split('.'));

  arr.forEach(elem => {
    elem.reverse().forEach((item, index, array) => {
      if (result[`.${item}`]) {
        result[`.${item}`] += 1;
      } else {
        result[`.${item}`] = 1;
      }
      array.splice(index + 1, 1, `${item}.${array[index + 1]}`);
    });
  });

  return result;
}
