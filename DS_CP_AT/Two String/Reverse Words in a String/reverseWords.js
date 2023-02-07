/*
  Given a sentence, reverse the order of its words without affecting the order of letters
  within a given word.
*/

function reverseWords(sentence) {

  // Remove white spaces at the edges and replace two or more blank spaces with only one space
  sentence = sentence.trim().replace(/  +/g, ' ')

  // Split the sentence into a string with words as elements
  const words = sentence.split(' ')

  /*
    Declare back as the beginning of the array, front as the last element and a empty variable
    called temp to store temporally the back value
  */
  let back = 0, front = words.length - 1, temp = ""

  // Iterate over the array while back value less than front value
  while (back < front) {

    // Store the value of the word in the array at the index back
    temp = words[back]

    // Replace the word in the array at the position back, with the value at the las position in the array
    words[back] = words[front]

    /*
      Replace the last word with the first word (because we override the back words that's why
      we stored that value in a temp value)
    */
    words[front] = temp

    // Just add one and remove one from back and front to bring the pointers to other positions
    back ++
    front --
  }

  // finally just return the string after join the array.
  return words.join(" ");

}

console.log(reverseWords("We love Python") == "Python love We")
console.log(reverseWords("To be or not to be") == "be to not or be To")
console.log(reverseWords("You are amazing") == "amazing are You")
console.log(reverseWords(" Hello     World ") == "World Hello")
console.log(reverseWords("Hey") == "Hey")




