def numberOfSubstrings(s: str) -> int:
  a = 0
  b = 0
  c = 0

  right = 0

  count = 0

  for index, char in enumerate(s):
    if char == "a":
      a += 1
    elif char == "b":
      b += 1
    else:
      c += 1

    while a > 0 and b > 0 and c > 0:
      count += len(s) - index

      if s[right] == "a":
        a -= 1
      elif s[right] == "b":
        b -= 1
      else:
        c -= 1

      right += 1

  return count

print(numberOfSubstrings("abcabc"))
