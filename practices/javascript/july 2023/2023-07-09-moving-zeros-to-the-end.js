// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//my first attempt
function moveZeros(arr) {
  const newArray = []
  let counter = 0
  arr.map((element) => {
    if (element === 0) {
      counter += 1
    } else {
      newArray.push(element)
    }
  }) 
  console.log(counter, "counter")
  for (let i = 0; i < counter; i++) {
    newArray.push(0)
  }
  return newArray
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

// best practice
// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }

// explanation
// this is much more concise. it first filters the array to remove all zeroes, then concats that array with another filtered array that's only returning zeroes. since it's concatendated, they're joined, so the zeroes simply get added on to the end of the concatented array.