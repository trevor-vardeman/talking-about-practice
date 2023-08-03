// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution = (str, ending) => str.endsWith(ending) ? true : false

// better solution

// const solution = (str, ending) => str.endsWith(ending);

// explanation

// no need for the ternary operator in this case, the endsWith method will simply evaluate to true or false, which makes it a more simple solution.