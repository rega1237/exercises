# https://leetcode.com/problems/happy-number/

def isHappy(n)
  def sumNumbers(num)
    total_sum = 0

    while num > 0
      digit = num % 10
      num = (num / 10).floor()
      total_sum += digit ** 2
    end

    total_sum
  end

  slow = sumNumbers(n)
  fast = sumNumbers(sumNumbers(n))

  while true
    if fast == 1
      return true
    elsif fast == slow
      return false
    else
      slow = sumNumbers(slow)
      fast = sumNumbers(sumNumbers(fast))
    end
  end
end
