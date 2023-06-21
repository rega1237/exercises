def reverseString(s)
  beginning = 0
  last = s.length - 1

  while last > beginning
    beginningValue = s[beginning]
    lastValue = s[last]

    s[beginning] = lastValue
    s[last] = beginningValue

    beginning += 1
    last -= 1
  end

  return s
end


print reverseString(["h","e","l","l","o"]) # ["o","l","l","e","h"]
print reverseString(["H","a","n","n","a","h"]) # ["h","a","n","n","a","H"]
