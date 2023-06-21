def count_good_substrings(s)
  if s.size < 3
    return 0
  end

  count = 0
  goodCount = 0

  while count < s.size - 2
    subStr = s[count..count + 2]

    if subStr[0] != subStr[1] && subStr[0] != subStr[2] && subStr[1] != subStr[2]
      goodCount += 1
    end

    count += 1
  end

  goodCount
end

puts count_good_substrings("xyzzaz")
