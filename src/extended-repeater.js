import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const finalOptions = {
    repeatTimes: options.repeatTimes || 0,
    separator: options.separator || '+',
    addition:
      typeof options.addition === 'undefined' ? '' : String(options.addition),
    additionRepeatTimes: options.additionRepeatTimes || 0,
    additionSeparator: options.additionSeparator || '|',
  };

  if (typeof str !== 'string') {
    str = String(str);
  }

  let additionTemplateString = finalOptions.addition;

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additionTemplateString +=
      finalOptions.additionSeparator + finalOptions.addition;
  }

  let templateString = str + additionTemplateString;
  let resultString = templateString;

  for (let i = 1; i < options.repeatTimes; i++) {
    resultString += finalOptions.separator + templateString;
  }

  return resultString;
}
