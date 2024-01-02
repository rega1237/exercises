const nextGreatestLetter = (letters, target) => {
  for(const letter of letters){
    if(letter > target){
      return letter
    }
  }

  return letters[0]
}