function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let tempVar = arr[i];

    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tempVar
  }

  return arr;
}

console.log(reverseArrayInPlace([0, 1, 2, 3, 4, 5, 6]));