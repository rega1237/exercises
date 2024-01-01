def find_disappeared_numbers(nums)
  (1..nums.length).to_a - nums
end

print find_disappeared_numbers([4,3,2,7,8,2,3,1])