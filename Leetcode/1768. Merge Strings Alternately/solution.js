const mergeAlternately = (word1, word2) => {
  let mergedStr = ""

  const word1Size = word1.length
  const word2Size = word2.length

  const majorSize = word1Size > word2Size ? word1Size : word2Size

  count = 0

  while(count < majorSize) {
    if(word1[count] && word2[count]) {
      mergedStr += word1[count] + word2[count]
      count ++
    } else if (word1[count] && !word2[count]) {
      mergedStr += word1[count]
      count ++
    } else {
      mergedStr += word2[count]
      count++
    }
  }

  return mergedStr
}


console.log(mergeAlternately("abc", "pqr"))
