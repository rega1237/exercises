# Linear Approach

def count_negatives(grid)
  count = 0

  grid.each do |row|
    count = count + (row.select { |el| el < 0 }).length
  end

  count 
end

puts count_negatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
puts count_negatives([[3,2],[1,0]])
puts count_negatives([[3,2],[-3,-3],[-3,-3],[-3,-3]])