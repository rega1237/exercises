def makeSmallestPalindrome(s):
  left = 0
  right = len(s) - 1

  sList = list(s)

  while left < right:
    charLeft = sList[left]
    charRight = sList[right]

    if charLeft != charRight:
      if charLeft > charRight:
        sList[left] = charRight
      else:
        sList[right] = charLeft

    left += 1
    right -= 1

  return "".join(sList)

#print (makeSmallestPalindrome("egcfe")) # "efcfe"
print (makeSmallestPalindrome("abcd")) # "abba"
