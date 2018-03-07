// O(log n) using recursion
function binarySearch(numArray, key) {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIndex];
  
  if (middleElem === key) {
    return true;
  } else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

let arrayFrom0to100 = [];
for (let i = 0; i <= 100; i++) {
  arrayFrom0to100.push(i);
}

// console.log(
//   binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
// );
console.log(
  binarySearch(arrayFrom0to100, 99)
);