// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if (!array || array.length <= 2) return 0
    return array.sort((a, b) => a - b).slice(0, -1).slice(1).reduce((acc, x) => acc += x)
}

// better solution

// const sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// explanation

// this just tests if the array is truthy or not, and if not returns zero. honestly not quite sure how that works with an array that has one or two elements, but it's slightly more concise than mine with a similar idea.