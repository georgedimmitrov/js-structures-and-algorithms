/*
  Pseudocode:
  function mergeSort(array) {
    If array length < 2
      Return array

    Create var for middle index of array
    Create var for far left index of array
    Create var for far right index of array
    Recursively call mergeSort function
  }
  Function merge (node1, node2) {
    Create var for result array
    While node1 length > 0 and node2 length > 0
      If node1[0] < node2[0]
        Shift node1 and push to result array
      else
        Shift node2 and push to result array
    Return concat node1 or node2 (depending if node1 is empty or not)

  Concept: It is easier to sort two sorted arrays than one unsorted
  [1, 5, 3, 9, 6, 4, 8]
  [1, 5, 3, 9] | [6, 4, 8]
  [1, 5] | [3, 9] [6] | [4, 8]
  [1] | [5] [3] | [9] [4] | [8]
 */

// Split arrays into halves and merge them recursively
function mergeSort(array) {
  if (array.length === 1) {
    return array; // array with single item
  }

  const middle = Math.floor(array.length / 2); // get middle item of the array
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
