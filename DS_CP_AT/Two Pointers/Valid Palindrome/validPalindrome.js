/*
  Write a function that takes a string s as input and checks whether it’s a palindrome or not.
*/

function isPalindrome(s) {

  // First set the value of the pointers, one at the beginning and the other one at the end

  let left = 0, right = s.length - 1;

  // Loop into the string while left and right not visit the same index (left < right)

  while (left < right) {

    /*

    if the String in the position left and String in the position right doesn't have the same value so we can say
    the string is not a palindrome so return false and complete the execution

    Else continue the iteration and add one to left position index and remove one to right position, when the while
    condition finish just return true because the String is a palindrome!

    */

    if (s[left] != s[right]) {
      return false
    }

    left++;
    right--;

  }

  return true
}

console.log(isPalindrome("kayak")); // TRUE
console.log(isPalindrome("hello")); // FALSE
console.log(isPalindrome("RACEACAR")); // FALSE
console.log(isPalindrome("A")); // TRUE
console.log(isPalindrome("ABCDABCD")); // FALSE
console.log(isPalindrome("DCBAABCD")); // TRUE
console.log(isPalindrome("ABCBA")); // TRUE
