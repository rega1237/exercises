def number_of_substrings(s)
  a = 0
  b = 0
  c = 0

  right = 0

  count = 0

  s.each_char.with_index do |char, index|
    if char == "a"
      a += 1
    elsif char == "b"
      b += 1
    else
      c += 1
    end

    while a > 0 && b > 0 && c > 0
      count += s.length - index
      a -= 1 if s[right] == "a"
      b -= 1 if s[right] == "b"
      c -= 1 if s[right] == "c"
      right += 1
    end
  end

  count
end

puts number_of_substrings("abcabc") // 10
