const containsDuplicate = (nums) => {
  const noDuplicates = new Set(nums)

  return !(nums.length === noDuplicates.size) 
}

console.log(containsDuplicate(([1,1,1,3,3,4,3,2,4,2])))