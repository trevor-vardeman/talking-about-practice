// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    const towerArr = []  
    let currentFloor = nFloors
    
    for (let i = 0; i < nFloors; i++) {
      let element = []
      
      for (let j = i; j > 0; j--) {
        element.push(" ")
      }
      
      for (let k = currentFloor * 2 - 1; k > 0; k--) {
        element.push("*")
      }
      
      for (let l = i; l > 0; l--) {
        element.push(" ")
      }
      
      currentFloor--
      towerArr.push(element.join(""))
    }
    return towerArr.reverse()
  }