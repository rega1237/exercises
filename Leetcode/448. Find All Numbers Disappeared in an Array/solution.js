const findDisappearedNumbers = (nums) => {
  const output = []
  const objNums = {}
  
  for(el of nums) {
    if(!objNums[el]){
      objNums[el] = 1
    }
  }

  for(let i = 1; i<= nums.length; i++){
    if(!objNums[i]){
      output.push(i)
    }
  }

  return output
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))