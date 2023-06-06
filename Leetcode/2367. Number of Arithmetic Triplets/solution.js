// https://leetcode.com/problems/number-of-arithmetic-triplets/description/

const arithmeticTriplets = (nums, diff) => {
  let left = 0;
  let mid = 1;
  let right = 2;
  let count = 0;

  while (right < nums.length) {
    const firstDiff = nums[mid] - nums[left];
    const secondDiff = nums[right] - nums[mid];

    if (firstDiff === diff && secondDiff === diff) {
      count++;
      right++;
    } else if (secondDiff < diff) {
      right++;
    } else if (firstDiff < diff) {
      mid++;
    } else {
      left++;
    }

    if (left === mid) {
      mid++;
    }

    if (mid === right) {
      right++;
    }
  }

  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2
