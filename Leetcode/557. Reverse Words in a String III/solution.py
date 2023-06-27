def reverseWords(s):
  splitStr = s.split()

  reverse = []

  for word in splitStr:
    reverse.append(word[::-1])

  return " ".join(reverse)

print(reverseWords("Let's take LeetCode contest"))
