/*
 Write a function that takes a string as input and checks whether it can be a valid
 palindrome by removing at most one character from it.
*/

/*

  Steps:

  1. Initialize two pointers at opposite ends of the string

  2. If the values at the left and right indexes match, move both toward the middle until
     they meet
  3. If a mismatch occurs, skip one of the elements and check the rest of the string for
     a palindrome
  4. Skip the other element, and check for the palindrome
  5. If no palindrome is obtained, return False, else if no more than one mismatch occurs
     throughout the traversal return True
*/
function isPalindrome(s) {

  // 1 step initialize two pointers
  let left = 0, right = s.length - 1, count = 0;

  while (left < right) {

    // 2 step if the left and right match move both toward
    if (s[left] == s[right]) {
      left ++
      right --
    } else if (s[left] != s[right] && s[left + 1 ] == s[right]) { // if a mismatch occurs skip left (left + 1) and check again and add 2 to left (like remove the actual and go to one more to continue with the check)
      count ++
      left += 2
      right --
    } else if (s[left] != s[right] && s[left ] == s[right - 1]) { // if a mismatch occurs skip right (right - 1) and check again if true subtract 2 to right and continue
      count ++
      left ++
      right -= 2
    } else { // if no palindrome return false
      return false
    }

    if (count > 1) {
      return false
    }
  }

  return true
}

console.log(isPalindrome("madame"));
console.log(isPalindrome("dead"));
console.log(isPalindrome("abca"))
console.log(isPalindrome("tebbem"))
console.log(isPalindrome("eeccccbebaeeabebccceea"))
console.log(isPalindrome("ognfjhgbjhzkqhzadmgqbwqsktzqwjexqvzjsopolnmvnymbbzoofzbbmynvmnloposjzvqxejwqztksqwbqgmdazhqkzhjbghjfno"))

