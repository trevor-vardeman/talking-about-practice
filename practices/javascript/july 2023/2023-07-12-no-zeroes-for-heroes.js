// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    if (n.toString.length === 1 && n === 0) return 0
    const negativeNum = () => n < 0 ? true : false
    let arr = Array.from(Math.abs(n).toString()).map(num => parseInt(num))
    while (arr[arr.length - 1] === 0 && arr.length > 1) {
      arr.pop()
    }
    return negativeNum() ? -parseInt(arr.join("")) : parseInt(arr.join(""))
  }

// better solution

// function noBoringZeros(n) {
//     while (n % 10 === 0 && n !== 0) {
//       n = n / 10
//     }
//     return n
//   }

// explanation
// as expected, this is a much better solution to the problem than i used to solve. basically, you just use a simple while statement to find the numbers so that while the number ends in 0, but isn't equal to 0, you divide the number by 0 and try again. so simple, but i like to make things difficult sometimes.