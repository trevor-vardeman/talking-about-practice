// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lowercaseStr = str.toLowerCase()
    let finalizedRot13 = ""
    for (let i = 0; i < str.length; i++) {
      let index = alphabetArray.findIndex(letter => letter === lowercaseStr[i]) + 13
      const isUppercase = letter => /[A-Z]/.test(letter)
      if (index === 12) {
        finalizedRot13 += str.charAt(i)
      } else if (index > 25) {
        let newIndex = index - 26
        isUppercase(str[i]) ? finalizedRot13 += alphabetArray[newIndex].toUpperCase() : finalizedRot13 += alphabetArray[newIndex]
      } else {
        isUppercase(str[i]) ? finalizedRot13 += alphabetArray[index].toUpperCase() : finalizedRot13 += alphabetArray[index]
      }
    }
    return finalizedRot13
  }