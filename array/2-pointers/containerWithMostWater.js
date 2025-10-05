// -------------------------------------------------------------------------------------------------------------------------------------

// Container With Most Water

// You are given an array height[], where each element represents the height of a vertical line drawn at that index on the x-axis.
// Your task is to find two lines that, together with the x-axis, form a container that can hold the maximum amount of water.

// You need to return the maximum area of water that can be contained.
// input = [1,8,6,2,5,4,8,3,7]
// Output = 49

// -------------------------------------------------------------------------------------------------------------------------------------

function containerWithMostWater(arr) {
  let maxArea = -1;
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    // Find min value at i and j that will determine how much water can be stored withing wall
    const length = Math.min(arr[i], arr[j]);
    const width = j - i;
    const area = length * width;
    console.log(i, j, length, width, area);
    if (area > maxArea) {
      maxArea = area;
    }
    //   Move that pointer whose value is less
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
