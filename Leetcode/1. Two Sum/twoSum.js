// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
  const arrIndex = [];
  nums.forEach((num,index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (num + nums[i] === target) {
      arrIndex.push(index, i);
      }
    }
  })
  return arrIndex.splice(0,2);
};

console.log(twoSum([2,7,11,15], 9))

