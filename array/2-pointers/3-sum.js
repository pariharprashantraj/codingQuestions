// -------------------------------------------------------------------------------------------------------------------------------------

// 3Sum

// Problem:
// Find all unique triplets in array that sum to zero.
// Concept:
// Fix one element, then use two pointers on the remaining array to find complement.
// tell me best time complexity it can be solved
// -------------------------------------------------------------------------------------------------------------------------------------

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function threeSum(arr) {
  const sortedArray = mergeSort(arr);
  let result = [];
  // -2 as we have to search for pair
  for (let i = 0; i < sortedArray.length - 2; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;
    let left = i + 1,
      right = sortedArray.length - 1;
    while (left < right) {
      const sum = sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (sum === 0) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        right--;
        //   skipping duplicate
        while (left < right && sortedArray[left] === sortedArray[left - 1]) {
          left++;
        }
        //   skipping duplicate
        while (left < right && sortedArray[right] === sortedArray[right + 1]) {
          right--;
        }
      }
      //   Not duplicate, but need operation
      else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
