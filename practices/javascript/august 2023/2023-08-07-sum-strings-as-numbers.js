// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) { 
    const x = parseInt(a) ? BigInt(a) : BigInt(0)
    const y = parseInt(b) ? BigInt(b) : BigInt(0)
    return (x + y).toString()
}

// better solution

// const sumStrings = (a, b) => (BigInt(a) + BigInt(b)).toString()

// explanation

// BigInt itself deals with 0 and empty strings without a problem, allowing this solution to be simpler than mine