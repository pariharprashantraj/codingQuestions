// -----------------------------------------------------------------------------------------------------------------

// Remove Duplicates from Sorted Array

// Problem:
// Remove duplicates in place and return new length.
// Example:
// Input: [1,1,2,2,3] → Output: [1,2,3]
// -----------------------------------------------------------------------------------------------------------------
function removeDuplicateFromSortedArray(arr) {
  let i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }
  return arr.slice(0, i + 1);
}

console.log(removeDuplicateFromSortedArray([1, 1, 2, 2, 3]));
