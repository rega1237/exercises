const singleNumber = (nums) => {
  const objNums = {}
  
  for(el of nums){
    if(objNums[el]){
      objNums[el] += 1
    } else {
      objNums[el] = 1
    }
  }

  return Object.keys(objNums).find(key => objNums[key] === 1)
}

console.log(singleNumber([4,1,2,1,2]))