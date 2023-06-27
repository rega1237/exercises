def reverse_words(s)
  splittAr = s.split(" ")
  reverseWords = []

  splittAr.each do |word|
    reverseWords.push(word.reverse)
  end

  return reverseWords.join(" ")
end

print reverse_words("Let's take LeetCode contest")
