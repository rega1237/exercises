// https://leetcode.com/problems/reverse-string/description/

const reverseString = (s) => {
  let beginning = 0
  let last = s.length - 1

  while(last > beginning) {
    const firstValue = s[beginning]
    const lastValue = s[last]

    s[beginning] = lastValue
    s[last] = firstValue

    beginning ++
    last --
  }

  return s
};

console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])) // ["h","a","n","n","a","H"]
