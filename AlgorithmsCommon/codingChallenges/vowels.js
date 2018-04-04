// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// using reduce iterative solution
function vowels(str) {
  const vowelLetters = ['a', 'e', 'i', 'o', 'u'];

  const vowelsArr = str.split('').reduce((acc, curr) => {
    if (vowelLetters.indexOf(curr) > -1) {
      acc.push(curr);
    }

    return acc;
  }, []);

  return vowelsArr.length;
}

// iterative straightforward solution with a for of loop
function vowels(str) {
  let count = 0;
  const vowelLetters = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowelLetters.includes(char)) {
      count++;
    }
  }

  return count;
}

// alternative Regex solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi) || [];

  return matches.length;
}

console.log(vowels('Hi There!')); // 3
console.log(vowels('Why do you ask?')); // 4
console.log(vowels('Why?')); // 0