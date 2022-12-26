# URL: https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true

def repeatedString(s, n)
  # Write your code here
  exact = n / s.length
  remainder = n % s.length
  count = s.count("a") * exact
  count += s[0...remainder].count("a") if remainder > 0
  count
end

p repeatedString("kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm", 736778906400)
p repeatedString("aab", 882787)
p repeatedString("gfcaaaecbg", 547602)
p repeatedString("abca", 13)