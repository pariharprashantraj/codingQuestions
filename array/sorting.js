// Common Sorting Algorithms (for learning/interview use)
// Algorithm	        Time Complexity	    Space	  Stable	    Notes
// Bubble Sort	            O(n²)	        O(1)	    ✅	    Simple but slow; only for small lists
// Selection Sort	        O(n²)	        O(1)	    ❌	    Fewer swaps, still slow
// Insertion Sort	        O(n²)	        O(1)	    ✅	    Fast for nearly sorted arrays
// Merge Sort	            O(n log n)	    O(n)	    ✅	    Great for stability and large data
// Quick Sort	            O(n log n) avg, O(log n)    ❌	    Very fast in practice, used in many engines
//                          O(n²) worst
// Heap Sort	            O(n log n)	    O(1)	    ❌	    Good for consistent performance

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 2, 9, 1, 5, 6]));
