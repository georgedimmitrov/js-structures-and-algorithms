// return all prime numbers up to `n` in an array
// array with: [0: true, 1: true, 2: true ] go from 2 to sqrt(n) and every number we hit, we mark all of its multiples as false
// optimization: Stop looping through at the square root of "num"
function sieveOfEratosthenes(n) {
  let primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  const result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(sieveOfEratosthenes(200)); // ...
console.log(sieveOfEratosthenes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(sieveOfEratosthenes(10)); // [2, 3, 5, 7]