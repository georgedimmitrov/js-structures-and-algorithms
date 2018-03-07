// if number is divisible by 3 -> Fizz
// if number is divisible by 5 -> Buzz
// if number is divisible by both 3 and 5 -> FizzBuzz
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);
