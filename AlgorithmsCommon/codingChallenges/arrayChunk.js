// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// decently ease solution #3
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// console.log(chunk([1, 2, 3], 2));

console.log(chunk([1, 2, 3, 4, 5], 2));

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

// console.log(chunk([1, 2, 3, 4, 5], 4));

// console.log(chunk([1, 2, 3, 4, 5], 10));


// Basic solution #1
// function chunk(array, size) {
//   const chunked = [];
//   let intermediateArr;

//   for (let i = 0; i < array.length; i++) {

//     intermediateArr = array.splice(0, size);

//     if (intermediateArr.length) {
//       chunked.push(intermediateArr);
//     }
//   }

//   if (array.length) {
//     chunked.push(array);
//   }

//   return chunked;
// }


// Basic solution #2
// function chunk(array, size) {
//   // empty array to hold chunks
//   const chunked = [];

//   // for each element in unchunked array
//   for (let element of array) {
//     // retrieve 'last' element in chunked
//     const last = chunked[chunked.length - 1];
//     console.log(last);

//     // if no last element or its length is equal to chunk size -> push new chunk to 'chunked' with the current element
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       // else add the element into the chunk
//       last.push(element);
//     }
//   }

//   return chunked;
// }