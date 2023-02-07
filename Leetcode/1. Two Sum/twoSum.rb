# https://leetcode.com/problems/two-sum/description/

def two_sum(nums, target)

  hash = {}
  nums.each_with_index do |number, index|

    if hash[target - number]
        return [hash[target - number], index]
    else
        hash[number] = index
    end
  end
end

#print two_sum([2,7,11,15], 9) == [0, 1]
#print two_sum([3,2,4], 6) == [1,2]
#print two_sum([3,3], 6)
print two_sum([11, 8, 1, 7], 9)
