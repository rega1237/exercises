def missing_number(nums)
  ((0..nums.length).to_a - nums)[0]
end

puts missing_number([9,6,4,2,3,5,7,0,1])