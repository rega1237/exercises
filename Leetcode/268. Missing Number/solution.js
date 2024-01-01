const missingNumber = (nums) => {
  let range = 0;

  for(let i = 0; i <= nums.length; i ++) {
    range += i
  }

  const numsSum = nums.reduce( (total, current) => total + current, 0)

  return range - numsSum
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))