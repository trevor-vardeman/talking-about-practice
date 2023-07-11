// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    if (number <= 0) return 0
      const arrayOfNums = []
      for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          arrayOfNums.push(i)
        }
      }
      return arrayOfNums.reduce((accumulator, x) => accumulator += x)
  }

  solution(10)
  solution(23)

  // better solution

//   function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }

// explanation
// this solution is better because there's no need for an array of numbers that needs to be reduced in my solution, you can simplify by doing it this way.