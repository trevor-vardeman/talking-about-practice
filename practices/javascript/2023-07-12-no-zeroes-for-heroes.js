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