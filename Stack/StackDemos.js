/**
 * base converter
 */
function baseConverter(decNumber, base) {
  let stack = new Stack();
  let remainder;
  let baseString = '';
  let digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    remainder = Math.floor(decNumber % base);
    stack.push(remainder);
    decNumber = Math.floor(decNumber / base);
  }

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()];
  }

  return baseString;
}

// console.log(baseConverter(5, 2));
// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));

/**
 * balanced symbols
 */

function parenthesesChecker(symbols) {

  let stack = new Stack(),
    balanced = true,
    index = 0,
    symbol, top,
    opens = "([{",
    closers = ")]}";

  while (index < symbols.length && balanced) {
    symbol = symbols.charAt(index);
    if (opens.indexOf(symbol) >= 0) {
      stack.push(symbol);
      console.log(`open symbol - stacking ${symbol}`);
    } else {
      console.log(`close symbol ${symbol}`);
      if (stack.isEmpty()) {
        balanced = false;
        console.log('Stack is empty, no more symbols to pop and compare');
      } else {
        top = stack.pop();
        //if (!matches(top, symbol)){
        if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
          balanced = false;
          console.log(`popping symbol ${top} - is not a match compared to ${symbol}`);
        } else {
          console.log(`popping symbol ${top} - is a match compared to ${symbol}`);
        }
      }
    }
    index++;
  }
  if (balanced && stack.isEmpty()) {
    return true;
  }
  return false;
}

// console.log(parenthesesChecker('{([])}')); //true
// console.log(parenthesesChecker('{{([][])}()}')); //true
// console.log(parenthesesChecker('[{()]')); //false

/**
 * TowersOfHanoi
 */
function towerOfHanoi(n, from, to, helper) {

  if (n > 0) {
    towerOfHanoi(n - 1, from, helper, to);
    to.push(from.pop());
    console.log('-----');
    console.log('Source: ' + from.toString());
    console.log('Dest: ' + to.toString());
    console.log('Helper: ' + helper.toString());
    towerOfHanoi(n - 1, helper, to, from);
  }
}

var source = new Stack();
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

towerOfHanoi(source.size(), source, dest, helper);

source.print();
helper.print();
dest.print();