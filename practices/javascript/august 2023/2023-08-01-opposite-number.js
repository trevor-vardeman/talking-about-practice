// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

const opposite = number => number < 0 ? Math.abs(number) : -number

// better solution

// const opposite = number => -number

// explanation

// there's just always a better solution. this one was actually simpler than i thought!