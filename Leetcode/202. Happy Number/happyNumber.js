// https://leetcode.com/problems/happy-number/

function isHappy(n) {
  // Create a function to make the sum of the numbers
  function sumNumbers(num) {
    let totalSum = 0

    while(num > 0) {
      // The first number is temp example 19/10 = 1,9 Math.floor result 1
      let temp = Math.floor(num/10);

      // The last digit is the module of the division example 19 % 10 = 9
      let digit = num % 10;

      // We set the next num to be evaluated
      num = temp;

      // Make the sum of square of the number
      totalSum += digit ** 2;
    }
    return totalSum
  }

  let slow = sumNumbers(n), fast = sumNumbers(sumNumbers(n));

  while (true) {
    // if fast == 1 the number is a happy number
    if (fast == 1) {
      return true
    } else if (fast == slow) { // if fast == to slow that means we caught in a loop we break the function and return false
      return false
    } else {
      // we continue with the iteration of number slow + 1, fast + 2
      slow = sumNumbers(slow)
      fast = sumNumbers(sumNumbers(fast))
    }
  }
}

console.log(isHappy(19));
