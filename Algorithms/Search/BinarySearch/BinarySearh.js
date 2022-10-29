module.exports = function BinarySearch(A = [], value) {
  let low = 0,
    high = A.length;
  let index = null;
  while (index === null) {
    if (high < low) break;
    let mid = Math.floor(low + (high - low) / 2);
    if (A[mid] === value) index = mid;
    if (A[mid] > value) high = mid - 1;
    if (A[mid] < value) low = mid + 1;
  }
  return index;
};
