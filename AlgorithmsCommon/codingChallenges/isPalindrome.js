// racecar -> racecar
// function isPalindrome(string) {
//   return string.split('').every((char, i) => {
//     return char === string[string.length - 1 - i];
//   });
// }

function isPalindrome(string) {
  const reversed = string.split('').reduce((reversed, char) => char + reversed);

  return reversed === string;
}

// }
// function isPalindrome(string) {
//   string = string.toLowerCase();
//   const charactersArr = string.split('');
//   const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

//   let lettersArr = [];
//   charactersArr.forEach((char) => {
//     if (validCharacters.indexOf(char) > -1) {
//       lettersArr.push(char);
//     }
//   });

//   if (lettersArr.join('') === lettersArr.reverse().join('')) {
//     return true;
//   }

//   return false;
// }

// const testString = 'Madam I\'m Adam';
// const testString = 'racekr';
const testString = 'racecar';
console.log(isPalindrome(testString));