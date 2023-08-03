// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!"
    if (p1 === "rock" && p2 === "scissors") return "Player 1 won!"
    if (p1 === "scissors" && p2 === "rock") return "Player 2 won!"
    if (p1 === "paper" && p2 === "rock") return "Player 1 won!"
    if (p1 === "rock" && p2 === "paper") return "Player 2 won!"
    if (p1 === "scissors" && p2 === "paper") return "Player 1 won!"
    if (p1 === "paper" && p2 === "scissors") return "Player 2 won!"
  };

// better solution

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };

// rps("scissors", "rock")

// explanation
// this is the kind of solution i was looking for -- much more elegant. here, we're creating an object with the rules. the keys are the rps, and the values are the only other ones they beat. then, you create an 'if' statement that checks if the second player's answer matches the value of the first player's selection. if so, player 1 wins, if not, player 2 wins. beautiful.