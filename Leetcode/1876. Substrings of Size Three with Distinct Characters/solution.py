def countGoodSubstrings(s):
  if len(s) < 3:
    return 0

  count = 0
  goodCount = 0

  while count < len(s) - 2:
    subStr = s[count:count + 3]

    if subStr[0] != subStr[1] and subStr[0] != subStr[2] and subStr[1] != subStr[2]:
      goodCount += 1

    count += 1

  return goodCount


print(countGoodSubstrings("xyzzaz"))


