/*
  Given an array of integers, nums, and an integer value, target, determine if there are any
  three integers in nums whose sum equals the target. Return TRUE if three such integers are
  found in the array. Otherwise, return FALSE.
*/

function findSumOfThree(nums, target) {

  // First sort the array
  const sortedNums = nums.sort((a, b) => a - b);

  // Iterate over the array to get one element of the array as the base of the operation in the iteration
  for (let index = 0; index < sortedNums.length; index++) {

    // Set the value of low as the next number of the base in the iteration and high the last one
    let low = index + 1, high = sortedNums.length - 1;

    // Iterate inside the loop so we can get the others numbers in the array
    while (low < high) {

      // We test the sum of the base element in the operation and the low and high elements in the array
      let sum = sortedNums[index] + sortedNums[low] + sortedNums[high];

      // Star with the condition if sum is == to target just return true true and stop the program
      if (sum == target) {
        return true
      } else if (sum < target) { // if sum is less than target we add +1 to low (remember we sorted the array) so the next value of sum has to be greater than the last
        low ++
      } else { // Else is less than target we work the way around now we subtract -1 to high so the next iteration the result has to be lower
        high --
      }
    }

  }

  // At the end of all the iterations if we don't get any element who fulfill the condition (sum == target) just return false
  return false
}


console.log(findSumOfThree([1,-1,0] , -1)) // FALSE
console.log(findSumOfThree([3,7,1,2,8,4,5] , 10)) // TRUE
console.log(findSumOfThree([3,7,1,2,8,4,5] , 20)) // TRUE
console.log(findSumOfThree([3,7,1,2,8,4,5] , 21)) // FALSE
console.log(findSumOfThree([-1,2,1,-4,5,-3] , -8)) // TRUE
console.log(findSumOfThree([-1,2,1,-4,5,-3] , 0)) // TRUE
console.log(findSumOfThree([-1,2,1,-4,5,-3] , 7)) // FALSE
