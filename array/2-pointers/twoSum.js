// -----------------------------------------------------------------------------------------------------------------
// Given a sorted array of integers and a target, return indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9 → Output: [0, 1]
// -----------------------------------------------------------------------------------------------------------------

function twoSum(arr, target) {
  //   const arr = array.sort((a, b) => a - b);
  //   console.log(arr);
  // [ 1, 2, 2, 3, 4, 5, 7, 9 ]
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex < lastIndex) {
    if (arr[firstIndex] + arr[lastIndex] > target) {
      lastIndex--;
    } else if (arr[firstIndex] + arr[lastIndex] < target) {
      firstIndex++;
    } else {
      return [firstIndex, lastIndex];
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
