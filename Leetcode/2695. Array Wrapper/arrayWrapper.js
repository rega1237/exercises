// https://leetcode.com/problems/array-wrapper/description/

var ArrayWrapper = function(nums) {
  this.arr = nums
};

ArrayWrapper.prototype.valueOf = function() {
  let sum = 0
  for(v of this.arr) {
      sum += v
  }
  return sum
}

ArrayWrapper.prototype.toString = function() {
  return JSON.stringify(this.arr)
}
