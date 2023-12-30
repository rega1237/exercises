const countNegatives = (grid) => {
  count = 0

  grid.forEach(row => {
    count += (row.filter((el) => el < 0).length)
  });

  return count
}

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[3,2],[1,0]]))
console.log(countNegatives([[3,2],[-3,-3],[-3,-3],[-3,-3]]))