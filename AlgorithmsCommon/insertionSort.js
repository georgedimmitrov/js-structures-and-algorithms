/*
  faster than most O(n log n) sorting algorithms for SMALL lists
  memory efficient - requires only O(1) space for the single item that is being moved
  stable - equal elements appear in the same order in the sorted list
  adaptive - fast when sorting mostly sorted lists or when adding items to an already sorted list
  easy to implement

  Worst case - O(n^2)
  Best case - O(n)

  Pseudocode
  function insertionSort(array)
    Loop through array
      Create temp let for current element
      Create let and set equal to previous element's index
      Loop backwards while index >= 0 and current element > temp let
        Set next element equal to current element
      Set next element equal to temp
 */
function insertionSort(array) {
  const length = array.length;
debugger;
  for (let i = 1; i < length; i++) {
    let temp = array[i];
    let j = i - 1;
    for (; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

let array = [5, 3, 1, 2, 4];
console.log(insertionSort(array));
