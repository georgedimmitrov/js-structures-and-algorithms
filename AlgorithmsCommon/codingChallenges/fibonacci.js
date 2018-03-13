// 1, 1, 2, 3, 5, 8, 13, 21, 34...
// position = 4 -> return 3; 9->34 and so on

// Store function calls in a cache, so next time same arguments are passed -> result is grabbed from cache
function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  // IMPORTANT - call fib (the memoized version) and NOT slowFib
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

console.log(fib(50)); // 12586269025


// exponential complexity O(n^2)-> bad
// recursive solution
// function fibonacci(position) {
//   if (position < 2) {
//     return position;
//   }

//   return fibonacci(position - 1) + fibonacci(position - 2);
// }

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
// console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // ????