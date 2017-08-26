function factorial(num, accum = 1) {
  if (num < 2) {
    return accum;
  }

  return factorial(num - 1, num * accum);
}

console.log(factorial(4));
