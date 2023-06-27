def make_smallest_palindrome(s)
  left = 0
  right = s.size - 1

  stringPal = s

  while left < right
    charLeft = stringPal[left]
    charRight = stringPal[right]

    if charLeft != charRight
      if charLeft > charRight
        stringPal[left] = charRight
      else
        stringPal[right] = charLeft
      end
    end

    left += 1
    right -= 1
  end

  stringPal
end

puts make_smallest_palindrome("egcfe") # "efcfe"
