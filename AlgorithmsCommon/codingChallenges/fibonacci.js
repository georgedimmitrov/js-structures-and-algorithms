// 1, 1, 2, 3, 5, 8, 13, 21, 34...
// position = 4 -> return 3; 9->34 and so on
// exponential complexity O(n^2)-> bad
function fibonacci(position) {
  if (position < 3) {
    return 1;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

// console.log(fibonacci(5));

// console.log(fibonacci(9)); // 34
// console.log(fibonacci(6)); // 8
console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765
// console.log(fibonacci(50)); // ????