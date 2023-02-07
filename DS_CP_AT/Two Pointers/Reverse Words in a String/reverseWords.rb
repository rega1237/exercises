=begin
  Given a sentence, reverse the order of its words without affecting the order of letters
  within a given word.
=end

def reverseWords(sentence)

  sentence = sentence.strip
  sentence.gsub(/  +/, " ")

  split_sentence = sentence.split(' ')

  start = 0
  last = split_sentence.length - 1
  temp = ''

  while start < last
    temp = split_sentence[start]
    split_sentence[start] = split_sentence[last]
    split_sentence[last] = temp
    start += 1
    last -= 1
  end

  split_sentence.join(' ')

end

puts reverseWords("We love Python") == "Python love We"
puts reverseWords("To be or not to be") == "be to not or be To"
puts reverseWords("You are amazing") == "amazing are You"
puts reverseWords(" Hello     World ") == "World Hello"
puts reverseWords("Hey") == "Hey"

