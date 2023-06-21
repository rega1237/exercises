// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

const countGoodSubstrings =(s) => {

  if(s.length < 3) {
    return 0
  }

  let goodCount = 0
  let count = 0

  while(count < s.length - 2) {
    const subStr = s.slice(count, 3 + count)
    if(subStr[0] != subStr[1] && subStr[0] != subStr[2] && subStr[1] != subStr[2]) {
      goodCount ++
    }
    count ++
  }

  return goodCount
}


console.log(countGoodSubstrings("xyzzaz")) // 1
console.log(countGoodSubstrings("aababcabc")) // 4
console.log(countGoodSubstrings("abc")) // 1
console.log(countGoodSubstrings("aab")) // 0

