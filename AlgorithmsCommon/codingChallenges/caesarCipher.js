function caesarCipher(str, num) {
  num = num % 26; // if user passes -27 -> -27 % 26 = -1, -900 -> -16
  const lowerCaseString = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    // checks to see if our index is going out of bounds 0-25 (for english alphabet)
    if (newIndex > 25) {
      newIndex -= 26;
    }
    if (newIndex < 0) {
      newIndex += 26;
    }

    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }

  return newString;
}

// console.log(caesarCipher('Zoo Keeper', 2)); // bqq mggrgt
// console.log(caesarCipher('Big Car', -16)); // Lsq Mkb
console.log(caesarCipher('JavaScript', -900)); // TkfkCmbszd
