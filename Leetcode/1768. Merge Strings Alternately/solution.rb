def merge_alternately(word1, word2)
  mergedStr = ""

  sizeWordOne = word1.size
  sizeWordTwo = word2.size

  majorLength = sizeWordOne > sizeWordTwo ? sizeWordOne : sizeWordTwo

  count = 0

  while count < majorLength

    if word1[count] && word2[count]
      mergedStr += word1[count] + word2[count]
      count += 1
    elsif word1[count] && !word2[count]
      mergedStr += word1[count]
      count += 1
    else
      mergedStr += word2[count]
      count += 1
    end

  end

  mergedStr
end

puts merge_alternately("abc", "pqr") # apbqr
puts merge_alternately("ab", "pqrs") # apbqrs

