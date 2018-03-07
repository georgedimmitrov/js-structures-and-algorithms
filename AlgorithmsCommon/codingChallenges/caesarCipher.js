function caesarCipher(str, shiftNum) {
  // num % 26 can only be 0 to 25 or -25 and 0, so if user passes -27 -> -27 % 26 = -1, -900 -> -16
  shiftNum = shiftNum % 26;
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
    let newIndex = currentIndex + shiftNum;

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

// console.log(caesarCipher('Zoo Keeper', 2)); // Bqq Mggrgt
// console.log(caesarCipher('Big Car', -16)); // Lsq Mkb
console.log(caesarCipher('JavaScript', -900)); // TkfkCmbszd
