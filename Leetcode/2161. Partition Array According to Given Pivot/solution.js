// https://leetcode.com/problems/partition-array-according-to-given-pivot/

const pivotArray = (nums, pivot) => {
  const leftAr = []
  const middleAr = []
  const rightAr = []

  nums.forEach(num => {
    if(num < pivot) {
      leftAr.push(num)
    } else if(num > pivot) {
      rightAr.push(num)
    } else {
      middleAr.push(num)
    }
  });

  return [...leftAr, ...middleAr, ...rightAr]
}

console.log(pivotArray([9,12,5,10,14,3,10], 10)) // [9,5,3,10,10,12,14]
