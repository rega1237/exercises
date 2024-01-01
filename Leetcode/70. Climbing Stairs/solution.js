const climbStairs = (n) => {
  const steps = new Array(n+1)

  steps[0] = 1
  steps[1] = 1

  for(let i = 2; i <= n; i++){
    steps[i] = steps[i - 1] + steps[i - 2]
  }

  return steps[n]
}

console.log(climbStairs(7))