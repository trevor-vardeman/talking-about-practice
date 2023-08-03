// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) return 0
    return array.reduce((acc, x) => acc += x)/array.length
}

// another solution

// const find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }

// explanation

// i like the simplicity of using the ternary operator instead of a single 'if' statement to account for an empty array. much more elegant!