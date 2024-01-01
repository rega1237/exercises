def contains_duplicate(nums)
  uniques_values = nums.uniq
  
  if nums.length == uniques_values.length
    false
  else
    true
  end
end

puts contains_duplicate([1,1,1,3,3,4,3,2,4,2])