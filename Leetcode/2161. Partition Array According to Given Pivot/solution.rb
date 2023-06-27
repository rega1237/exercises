def pivot_array(nums, pivot)
  leftAr = []
  middleAr = []
  rightAr = []

  nums.each do |num|
    if num < pivot
      leftAr.push(num)
    elsif num > pivot
      rightAr.push(num)
    else
      middleAr.push(num)
    end
  end

  return leftAr + middleAr + rightAr
end

puts pivot_array([9,12,5,10,14,3,10], 10)
