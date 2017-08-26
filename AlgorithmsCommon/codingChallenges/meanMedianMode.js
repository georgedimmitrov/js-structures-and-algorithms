function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

function getMean(array) {
  let sum = 0;

  array.forEach(num => {
    sum += num;
  });

  return sum / array.length;
}

function getMedian(array) {
  // sort in ascending order -> 1, 2, 3..
  array.sort(function(a, b) {
    return a - b;
  });
  let median = null;
  
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    let midOne = array[(array.length / 2) - 1];
    let midTwo = array[array.length / 2];
    median = (midOne + midTwo) / 2;
  }

  return median;
}

// [3, 4, 2, 3, 6, 4, 1] -> { '1': 1, '2': 1, '3': 2, '4': 2, '6': 1 }
function getMode(array) {
  let modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) {
      modeObj[num] = 0;
    }
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }
  
  // if all items have the same repetition -> no modes
  if (modes.length === Object.keys(modeObj).length) {
    modes = [];
  }

  return modes;
}

console.log(meanMedianMode([3, 4, 2, 3, 6, 4, 1]));

