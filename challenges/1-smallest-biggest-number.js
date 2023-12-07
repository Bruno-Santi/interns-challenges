// ### 1. Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// #### Examples
// ```
// minMax([2, 1, 3, 5, 4]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// ```

const minMax = (arr) => {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min === 0) min = arr[i];
    if (arr[i] < min) min = arr[i];

    if (arr[i] > max) max = arr[i];
  }
  console.log([min, max]);
};

minMax([2, 1, 3, 5, 4]);
minMax([2334454, 5]);
minMax([1]);
