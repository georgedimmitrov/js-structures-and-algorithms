// Given an array shift it to the right one time
// shiftArrayRight([1, 2, 3, 4, 5]) // [ 5, 1, 2, 3, 4 ]
// shiftRightMultiple([1, 2, 3, 4, 5], 2); //[ 4, 5, 1, 2, 3 ]

function shiftArrayRight(array) {
  let lastValue = array[array.length - 1];

  for (let i = array.length - 2; i >= 0; i--) {
    // copy element at pos [i] to pos [i + 1]
    array[i + 1] = array[i];
  }

  array[0] = lastValue;

  return array;
}

function shiftRightMultiple(array, count) {
  for (let i = 0; i < count; i++) {
    shiftArrayRight(array);
  }

  return array;
}

console.log(shiftArrayRight([1, 2, 3, 4, 5])); // [ 5, 1, 2, 3, 4 ]
console.log(shiftRightMultiple([1, 2, 3, 4, 5], 2)); //[ 4, 5, 1, 2, 3 ]
