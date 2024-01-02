def search(nums, target)
  if nums.length === 1 && nums[0] === target
    return 0
  end

  left = 0
  right = nums.length - 1

  while left <= right
    mid = left + (right - left) / 2

    return mid if nums[mid] === target

    if nums[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end

  return -1
end

puts search([2,5], 5)