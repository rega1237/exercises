#linear solution
def target_indices(nums, target)
  nums.sort!
  output = []

  nums.each.with_index do |num, index|
    if num == target
      output.push(index)
    end
  end

  output
end

#Binary Search solution
def target_indices(nums, target)
  nums.sort!
  output = []

  low = 0
  high = nums.length - 1

  while low <= high
    mid = low + ((high - low) / 2)
    puts nums[mid]

    if nums[mid] < target
      low = mid + 1
    elsif nums[mid] > target
      high = mid - 1
    else
      output << mid
      low = mid - 1
      high = mid + 1
      break
    end
  end

  # check left of target
  while low >= 0 && nums[low] == target
    output << low
    low -= 1
  end

  # check right of target
  while high < nums.length && nums[high] == target
    output << high
    high += 1
  end

  output.sort!
end
