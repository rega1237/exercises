def make_smallest_palindrome(s)
  left = 0
  right = s.size - 1

  stringPal = s

  while left < right
    charLeft = stringPal[left]
    charRight = stringPal[right]

    if left != right
      if charLeft > charRight
        stringPal[left] = charRight
        left += 1
        right -= 1
      else
        stringPal[right] = charLeft
        left += 1
        right -= 1
      end
    end
  end

  stringPal
end

puts make_smallest_palindrome("egcfe") "efcfe"
