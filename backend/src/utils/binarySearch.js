/**
 * @param {Array} array - Array to search
 * @param {Function} compare - Function to compare the elements
 * @returns {Number} Index of the element or -1 if not found
 */

function binarySearch(array, compareFn) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = compareFn(array[mid]);

    if (comparison === 0) return mid;
    else if (comparison < 0) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

module.exports = { binarySearch };
