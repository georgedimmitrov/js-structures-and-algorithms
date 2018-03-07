// Given an integer, return an integer that is the reverse
// ordering of numbers.

//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(981) === 189); // true
console.log(reverseInt(-90) === -9); // true