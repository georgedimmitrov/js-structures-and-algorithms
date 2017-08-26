// returns every pair of numbers from 'numArray'
// that adds up to the sum
// numArray = [1, 6, 4, 5, 3, 3];
// sum = 7
// result -> [ [6, 1], [3, 4], [3, 4] ]
function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterPart = sum - currNum;
    if (hashtable.indexOf(counterPart) > -1) {
      pairs.push([currNum, counterPart]);
    }
    hashtable.push(currNum);
  }

  return pairs;
}
const numArray = [1, 6, 4, 5, 3, 3];
const sum = 7;

console.log(twoSum(numArray, sum)); // [ [6, 1], [3, 4], [3, 4] ]
