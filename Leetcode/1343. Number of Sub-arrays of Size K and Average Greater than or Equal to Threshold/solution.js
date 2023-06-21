const numOfSubarrays = (ar, k, threshold) => {
  if (ar.length < k) {
    return 0
  }

  let countSub = 0
  let tempCalc = 0

  for(let i = 0; i < k; i++) {
    tempCalc += ar[i]

    if(i == k - 1) {

      const average = tempCalc/k

      if(Math.floor(average) >= threshold) {
        countSub += 1
      }
    }
  }

  for(let i = k; i < ar.length; i++) {
    tempCalc = tempCalc - ar[i - k] + ar[i]

    const average = tempCalc/k

    if(Math.floor(average) >= threshold) {
      countSub += 1
    }
  }

  return countSub
}

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)) // 3
