const reverseWords = (s) => {
  const sAr = s.split(" ")
  const reverseWords = []

  sAr.forEach((word) => {
    reverseWords.push(word.split("").reverse().join(""))
  })


  return reverseWords.join(" ")
}

console.log(reverseWords("Let's take LeetCode contest"))
