def reverseString(s):
  first = 0
  last = len(s) - 1

  while first < last:
    firstValue = s[first]
    lastValue = s[last]

    s[first] = lastValue
    s[last] = firstValue

    first += 1
    last -= 1

  print(s)



reverseString(["h","e","l","l","o"])
