/*
  Pseudocode
  function bubbleSort(array, compare, swap) {
    Slice array to make it a pure function
    Create let for array length
    Do
      Create let to keep track of swapped
      Loop through array up to the array length
        If current value is greater than next value
          create temp let as current value
          Swap the current value and next value
          Set swap variable to true
    While swapped let is equal to true
    return sliced array variable
 */
// Worst complexity - O(n^2)
// Best case - O(n)
let array = [5, 8, 3, 5, 5, 5, 32, 32, 32, 0, 4, 2, 19, 26, 32, 7];

// basic ES5 implementation
function swap(array, i , j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSortES5Basic(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }

  return array;
}

array = [5, 8, 3, 5, 5, 5, 32, 32, 32, 0, 4, 2, 19, 26, 32, 7];
console.log('bubblesort es5 basic', bubbleSortES5Basic(array));

// basic ES6 implementation
function bubbleSortES6Basic(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }

  return array;
}

console.log('bubblesort es6 basic', bubbleSortES6Basic(array));


array = [5, 8, 3, 5, 5, 5, 32, 32, 32, 0, 4, 2, 19, 26, 32, 7];

// advanced && better implementation
function bubbleSort(array) {
  const origArray = array.slice();
  const length = origArray.length - 1;
  let swapped = null;
  do {
    swapped = false;
    for (let i = 0; i < length; ++i) {
      if (origArray[i] > origArray[i + 1]) {
        [origArray[i], origArray[i + 1]] = [origArray[i + 1], origArray[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return origArray;
}

console.log('bubblesort es6 advanced', bubbleSort(array));
