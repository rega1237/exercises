=begin
  Given an array of integers, nums, and an integer value, target, determine if there are any
  three integers in nums whose sum equals the target. Return TRUE if three such integers are
  found in the array. Otherwise, return FALSE.
=end

def findSumOfThree(nums, target)
  sortedNums = nums.sort

  sortedNums.each_with_index do |num, index|
    low = index + 1
    high = sortedNums.length - 1

    while low < high

      sum = sortedNums[index] + sortedNums[low] + sortedNums[high]

      if sum == target
        return true
      elsif sum < target
        low += 1
      else
        high -= 1
      end

    end
  end

  false

end


puts findSumOfThree([1,-1,0], -1) # FALSE
puts findSumOfThree([3,7,1,2,8,4,5], 10) # TRUE
puts findSumOfThree([3,7,1,2,8,4,5], 20) # TRUE
puts findSumOfThree([3,7,1,2,8,4,5], 21) # FALSE
puts findSumOfThree([-1,2,1,-4,5,-3], -8) # TRUE
puts findSumOfThree([-1,2,1,-4,5,-3], 0) # TRUE
puts findSumOfThree([-1,2,1,-4,5,-3], 7) # FALSE
