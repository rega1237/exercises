def single_number(nums)
  hashNums = {}

  nums.each do |num|
    if hashNums[num]
      hashNums[num] += 1
    else
      hashNums[num] = 1
    end
  end

  hashNums.key(1)
end

print single_number([4,1,2,1,2])