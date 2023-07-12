// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

function squareSum(numbers){
    if (numbers.length === 0) return 0
    return numbers.map(num => num * num).reduce((accumulator, x) => accumulator += x)
}

// tests
// squareSum([])
// squareSum([1, 2, 2])

// alternative solutions
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }

// explanation
// this solution simplifies mine by using the reducer method's initial value parameter, which eliminates the need of the "if" statement in my solution