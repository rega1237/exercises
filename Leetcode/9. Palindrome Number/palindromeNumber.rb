def is_palindrome(x)

  reverse = x.to_s.reverse.to_i

  x == reverse ? true : false
end

