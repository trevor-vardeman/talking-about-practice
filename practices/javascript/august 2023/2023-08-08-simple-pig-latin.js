// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let regex = /[a-z]/i
    let rearrangedWord = str.split(" ").map(word => {
      let newWord = ""
      let firstLetter = word.substring(0, 1)
      let coreWord = word.substring(1)
      word.match(regex) ? newWord += coreWord + firstLetter + "ay" : newWord += word
      return newWord
    })
    return rearrangedWord.join(" ")
}

