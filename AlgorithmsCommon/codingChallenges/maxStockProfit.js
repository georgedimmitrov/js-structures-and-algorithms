// takes in an array of prices as parameter
// returns the max possible profit of the day
// O(n) linear time
function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) {
      buyPrice = pricesArr[i];
    }
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

// [32, 46, 26, 38, 40, 48, 42]
// result = 22
// if no profit could be made -> return -1
// const pricesArray = [32, 46, 26, 38, 40, 48, 42]; // 22
const pricesArray = [10, 18, 4, 5, 9, 6, 16, 12]; // 12
console.log(maxStockProfit(pricesArray));
