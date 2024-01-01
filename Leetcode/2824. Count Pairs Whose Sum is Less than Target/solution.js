const countPairs = (nums, target) => {
  let count = 0
  let left = 0
  let right = nums.length - 1

  const sortedNums = nums.sort((a, b) => a - b)

  while(left < right){
    const check = sortedNums[left] + sortedNums[right]
    
    if(check < target){
      count += right - left
      left ++
    }else{
      right --
    }
  }

  return count
}

console.log(countPairs([-1,1,2,3,1], 2))
//countPairs([-6,2,5,-2,-7,-1,3], -2)
//countPairs([9,-5,-5,5,-5,-4,-6,6,-6], 3)
//countPairs([-6,2,5,-2,-7,-1,3], -2)
//countPairs([-5,-4,-6,-7,9,-10,0,4,9,-1], -7)