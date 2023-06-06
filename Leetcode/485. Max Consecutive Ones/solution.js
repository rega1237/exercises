// https://leetcode.com/problems/max-consecutive-ones/description/

const findMaxConsecutiveOnes = function (nums) {
  // if the array is empty return 0

  if (nums.length === 0) {
    return 0;
  }

  let maxOnes = 0
  let ones = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === 1) {
      ones += 1;
    } else {
      maxOnes = Math.max(maxOnes, ones)
      ones = 0
    }
  }

  return Math.max(maxOnes, ones);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([])); // 0
console.log(findMaxConsecutiveOnes([0,0])); // 0
console.log(findMaxConsecutiveOnes([0])); // 0
console.log(findMaxConsecutiveOnes([1, 0, 0, 0, 1])); // 1
