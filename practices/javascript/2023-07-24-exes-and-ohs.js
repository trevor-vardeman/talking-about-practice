// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     const x = () => {
//       if (str.toLowerCase().match(/x/g) === null) {
//         return 0
//       } else {
//         return str.toLowerCase().match(/x/g).length
//       }
//     }
//     const o = () => {
//       if (str.toLowerCase().match(/o/g) === null) {
//         return 0
//       } else {
//         return str.toLowerCase().match(/o/g).length
//       }
//     }
//     if (x() === o()) { 
//       return true
//     } else { 
//       return false
//     }
// }

// better soltuion

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     console.log((x && x.length) === (o && o.length));
//   }