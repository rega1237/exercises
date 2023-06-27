// https://leetcode.com/problems/lexicographically-smallest-palindrome/description/

const makeSmallestPalindrome = (s) => {
  let left = 0
  let right = s.length - 1

  let stringPal = s.split("")

  while(left < right) {
    const charLeft = s[left]
    const charRight = s[right]

    if(charLeft != charRight) {
      if(charLeft > charRight)
        stringPal[left] = charRight
      else{
        stringPal[right] = charLeft
      }
    }

    left ++
    right --
  }

  return stringPal.join("")
}

console.log(makeSmallestPalindrome("egcfe")) // "efcfe"
