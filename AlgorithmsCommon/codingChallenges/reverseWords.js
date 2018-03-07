// this is a string of words -> siht si a gnirts fo sdrow

function reverseWords(string) {
  const wordsArr = string.split(' ');
  let reversedExpression = '';

  wordsArr.forEach((word) => {
    for (let i = word.length - 1; i >= 0; i--) {
      reversedExpression += word[i];
    }

    reversedExpression += ' '
  });

  return reversedExpression;
}

function reverseWordsUsingArray(string) {
  const wordsArr = string.split(' ');
  let reversedWordsArr = [];

  wordsArr.forEach((word) => {
    let reversedWord = '';

    for (i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

console.log(reverseWords('this is a string of words'));
console.log(reverseWordsUsingArray('this is a string of words'));
// reverseWords('this is a string of words');
