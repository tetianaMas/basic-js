import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const storage = {};

  return names.map(name => {
    if (storage[name] >= 0) {
      storage[name] = storage[name] + 1;

      const currentFileName = `${name}(${storage[name]})`;
      storage[currentFileName] = 0;
      return currentFileName;
    } else {
      storage[name] = 0;
      return name;
    }
  });
}
