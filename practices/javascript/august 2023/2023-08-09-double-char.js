// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let newString = ""
    for (let i = 0; i < str.length; i++) {
      newString += str[i].repeat(2)
    }
    return newString
}

// another solution

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// explanation

// definitely a differnt way to work this problem. first, the string is split where each character is its own element in an array, then that array is mapped so that each element is added to itself to create two, then the array is joined back toegther as a string and returned.