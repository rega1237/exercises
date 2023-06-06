def arithmeticTriplets(nums, diff)
  left = 0
  mid = 1
  right = 2

  count = 0

  while right < nums.size
    firstDiff = nums[mid] - nums[left]
    secondDiff = nums[right] - nums[mid]

    if firstDiff == diff && secondDiff == diff
      count += 1
      right += 1
    elsif secondDiff < diff
      right += 1
    elsif firstDiff < diff
      mid += 1
    else
      left += 1
    end

    if mid == right
      right += 1
    end

    if left == mid
      mid += 1
    end
  end

  return count
end

puts arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)
