// 1, 1, 2, 3, 5, 8, 13, 21, 34...
// position = 4 -> return 3; 9->34 and so on
// exponential complexity O(n^2)-> bad
// recursive solution
function fibonacci(position) {
  if (position < 2) {
    return position;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

// super lame iterative solution #1
// function fibonacci(position) {
//   let firstNum = 0;
//   let secondNum = 1;
//   let temp = 0;
//   let result = 0;

//   for (let i = 2; i <= position; i++) {
//     result = firstNum + secondNum;
//     temp = secondNum;
//     secondNum = firstNum + secondNum;
//     firstNum = temp;
//   }

//   return result;
// }

// iterative solution #2 no swap variable, but using array for result instead
// function fibonacci(position) {
//   const result = [0, 1];
//   let firstNum = 0;
//   let secondNum = 0;

//   for (let i = 2; i <= position; i++) {
//     firstNum = result[i - 1];
//     secondNum = result[i - 2];

//     result.push(firstNum + secondNum);
//   }

//   return result[result.length - 1];
// }

// console.log(fibonacci(5));

// console.log(fibonacci(9)); // 34
// console.log(fibonacci(6)); // 8
console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // ????