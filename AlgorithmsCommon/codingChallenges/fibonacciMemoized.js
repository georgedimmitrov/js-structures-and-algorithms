// index: index of number in fibonacci sequence
// cache: an array used as memory
// check if number was already calculated and if it is not put it in cache for future calculation
// complexity: O(n)
function fibMemo(index, cache = []) {
  if (cache[index]) {
    return cache[index];
  }

  if (index < 3) {
    return 1;
  } else {
    cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
  }

  return cache[index];
}

console.log(fibMemo(20)); // 144
console.log(fibMemo(50)); // 12586269025
console.log(fibMemo(1000)); // 4.346655768693743e+208