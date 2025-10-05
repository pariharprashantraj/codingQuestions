// -------------------------------------------------------------------------------------------------------------------------------------

// Move Zeroes

// Problem:
// Move all zeros to end while keeping non-zero order.
// Example:
// Input: [0, 1, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 13, 12, 0, 0, 1, 0, 0, 0, 0, 0, 0] → Output: [ 1, 6, 3, 13, 12, 1 ]
// Concept: Use two pointers — one scans, one places non-zero numbers.
// -------------------------------------------------------------------------------------------------------------------------------------

function moveZeros(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}
console.log(
  moveZeros([
    0, 1, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 13, 12, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  ])
);
