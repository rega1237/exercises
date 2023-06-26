// https://leetcode.com/problems/strictly-palindromic-number/

/*
  Steps to calculate the base of numbers

  1. Divide the number by the number of the base
  2. Take the remainder and save it and divide again the result by the base number
  3. repeat steps 1 and 2 until the result of division is 0
  4. Take all remainder last to first and that is the base of your number

*/

const isStrictlyPalindromic = (n) => {
  let initialBase = 2;
  const lastBase = n - 2;

  let divResult = n;

  let remainder = [];

  while (initialBase <= lastBase) {
    const remainderLoop = divResult % initialBase;
    divResult = Math.floor(divResult / initialBase);

    remainder.push(remainderLoop);

    if (divResult === 0) {
      initialBase++;
      divResult = n;

      if (!isPalindrome(remainder)) {
        return false;
      }

      remainder = [];
    }
  }

  return true;
};

const isPalindrome = (val) => {
  return val.join("") === val.reverse().join("") ? true : false;
};

console.log(isStrictlyPalindromic(9));
console.log(isStrictlyPalindromic(4));
