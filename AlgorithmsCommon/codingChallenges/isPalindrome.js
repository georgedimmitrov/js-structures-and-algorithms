// racecar -> racecar
function isPalindrome(string) {
  string = string.toLowerCase();
  const charactersArr = string.split(''); // includes special characters like '
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) {
    return true;
  }

  return false;
}

// const testString = 'Madam I\'m Adam';
const testString = 'racekr';
console.log(isPalindrome(testString));