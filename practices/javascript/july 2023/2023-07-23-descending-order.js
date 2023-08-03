// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    return parseInt(n.toString().split("").map(element => parseInt(element)).sort((a, b) => b - a).join(""))
  }

// better solution

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }

// explanation

// the this solution uses the String constructuor instead of toString. but what makes it more readable is the use of the reverse method in place of a less readable sort function.