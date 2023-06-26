def is_strictly_palindromic(n)
  divRe = n

  initialBase = 2
  lastBase = n - 2

  remainder = []

  while initialBase <= lastBase
    calcRemainder = divRe % initialBase
    divRe = divRe / initialBase

    remainder.push(calcRemainder)

    if divRe === 0

      if !is_palindome(remainder)
        return false
      end
      initialBase += 1
      divRe = n
      remainder = []
    end
  end

  return true
end

def is_palindome(val)
  val.join("").reverse() === val.join("") ? true : false
end

puts is_strictly_palindromic(9)

