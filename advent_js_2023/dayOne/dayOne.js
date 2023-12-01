function findFirstRepeated(gifts) {
  // Code here
  let repeat = {}
  for(let i = 0; i < gifts.length; i++){
    Object.assign(repeat,{[gifts[i]]: (repeat[gifts[i]] || 0) + 1})
    if(repeat[gifts[i]] > 1){
      return gifts[i]
    }
  }
  return -1
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))