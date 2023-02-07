# Write a function that takes a string s as input and checks whether it’s a palindrome or not.

def isPalindrome(s)

  left = 0
  right = s.length - 1

  while left < right do
    if s[left] != s[right]
      return false
    end
    left += 1
    right -= 1
  end

  true
end


puts isPalindrome("kayak"); # TRUE
puts isPalindrome("hello"); # FALSE
puts isPalindrome("RACEACAR"); # FALSE
puts isPalindrome("A"); # TRUE
puts isPalindrome("ABCDABCD"); # FALSE
puts isPalindrome("DCBAABCD"); # TRUE
puts isPalindrome("ABCBA"); # TRUE
