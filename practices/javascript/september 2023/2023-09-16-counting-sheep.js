// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
  if (sheep.length === 0) return 0
  let sheepCount = 0
  
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      sheepCount += 1
    }
  }
  
  return sheepCount
}

// better solution

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// explanation

// filters the arrayOfSheeps and only keeps true values, then returns the lenght. i love this simplicity.