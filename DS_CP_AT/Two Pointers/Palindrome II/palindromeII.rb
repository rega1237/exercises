def isPalindrome(s)
  left = 0
  right = s.length - 1
  count = 0

  while left < right
   if s[left] == s[right]
    left +=1
    right -=1
   elsif s[left] != s[right] && s[left + 1] == s[right]
    count +=1
    left +=2
    right +=1
   elsif s[left] != s[right] && s[left] == s[right - 1]
    count +=1
    right -= 2
    left +=1
   else
    return false
   end

   if count > 1
    return false
   end
  end

  return true
end

puts isPalindrome("madame")
puts isPalindrome("dead")
puts isPalindrome("abca")
puts isPalindrome("tebbem")
puts isPalindrome("eeccccbebaeeabebccceea")
puts isPalindrome("ognfjhgbjhzkqhzadmgqbwqsktzqwjexqvzjsopolnmvnymbbzoofzbbmynvmnloposjzvqxejwqztksqwbqgmdazhqkzhjbghjfno")


