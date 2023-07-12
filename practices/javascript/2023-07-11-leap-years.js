// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

function isLeapYear(year) {
    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    if (year % 4 === 0) return true
    return false
}

// another solution

// function isLeapYear(year) {
//     return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
//   }

// i like this simplified version which returns true if any of the line is true, or, because it's an or statement, simply returns false if neither are true. nice and elegant.