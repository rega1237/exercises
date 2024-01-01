def climb_stairs(n)
  steps = (0..n).to_a

  steps[0] = 1
  steps[1] = 1

  (2..n).each { |i| steps[i] = steps[i - 1] + steps[i - 2] }

  steps[n]
end

puts climb_stairs(7)