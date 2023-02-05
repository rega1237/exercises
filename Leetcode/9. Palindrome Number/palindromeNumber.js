var isPalindrome = function(x) {

  const reverse = parseInt(x.toString().split('').reverse().join(''))

  return x == reverse ? true : false
};

console.log(isPalindrome(123))
