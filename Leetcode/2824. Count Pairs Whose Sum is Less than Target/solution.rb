def count_pairs(nums, target)
  left = 0
  right = nums.length - 1
  count = 0

  nums.sort!

  print nums
  puts

  while left < right
    check = nums[left] + nums[right]

    if check < target
      count += right - left
      left += 1
      puts count
    else
      right -= 1
    end
  end

  count
end

puts count_pairs([-1,1,2,3,1], 2)
#puts count_pairs([-6,2,5,-2,-7,-1,3], -2)
#puts count_pairs([9,-5,-5,5,-5,-4,-6,6,-6], 3)
#puts count_pairs([-6,2,5,-2,-7,-1,3], -2)
#puts count_pairs([-5,-4,-6,-7,9,-10,0,4,9,-1], -7)