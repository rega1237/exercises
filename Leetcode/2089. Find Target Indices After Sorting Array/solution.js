const targetIndices = (nums, target) => {
  const outPut = []
  const sortedNums = nums.sort((a, b) => a - b)

  let left = 0
  let right = sortedNums.length - 1

  while (left <= right) {
    mid = Math.floor(left + ((right - left) / 2))
    if (sortedNums[mid] < target) {
      left = mid + 1
    } else if (sortedNums[mid] > target) {
      right = mid - 1
    } else {
      outPut.push(mid)
      left = mid - 1
      right = mid + 1
      break
    }
  }

  while (left >= 0 && sortedNums[left] === target) {
    outPut.push(left)
    left --
  }

  while (right < sortedNums.length && sortedNums[right] === target) {
    outPut.push(right)
    right ++
  }

  return outPut.sort((a, b) => a - b)
}

console.log(targetIndices([1,2,5,2,3], 3))