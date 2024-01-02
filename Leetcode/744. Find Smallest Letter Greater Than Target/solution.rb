def next_greatest_letter(letters, target)
  letters.each do |letter|
    if letter > target
        return letter
    end
   end

   return letters[0]
end

puts next_greatest_letter(["c","f","j"], "z")