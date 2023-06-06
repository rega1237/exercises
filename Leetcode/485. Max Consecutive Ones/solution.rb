def findMaxConsecutiveOnes(nums)
  if nums.size === 0
    return 0
  end

  maxOnes = 0
  ones = 0

  nums.each do |num|
    if num === 1
      ones += 1
    else
      maxOnes = [ones, maxOnes].max
      ones = 0
    end
  end

  return [ones, maxOnes].max
end

puts findMaxConsecutiveOnes([])
puts findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
puts findMaxConsecutiveOnes([0,0])
puts findMaxConsecutiveOnes([0])
puts findMaxConsecutiveOnes([1, 0, 0, 0, 1])
puts findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])


