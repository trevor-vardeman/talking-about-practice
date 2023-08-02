// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(numString){
    const numArray = Array.from(numString)
    let binaryString = ""
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] < 5) {
        binaryString += 0
      } else {
        binaryString += 1
      }
    }
    return binaryString
}

// better solution

// const fakeBin = x => x.split('').map(n => n < 5 ? 0 : 1).join('');

// explanation

// instead of using the Array.from constructor, split does the same thing essentially. from there, it's a simple map over the array to replace the number with 1 or 0, before rejoining the array in string form.