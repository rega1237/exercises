def isStrictlyPalindromic(n):
  divResult = n

  initialBase = 2
  lastBase = n - 2

  remainder = []


  while initialBase <= lastBase:
    calcRemainder = divResult % initialBase
    divResult = divResult // initialBase

    remainder.append(calcRemainder)

    if divResult == 0:
      if not isPalindrome(remainder):
        return False

      divResult = n
      initialBase += 1
      remainder = []

  return True



def isPalindrome(val):
  reversedVal = val[::-1]
  if val == reversedVal:
    return True
  else:
    return False

print(isStrictlyPalindromic(9))
