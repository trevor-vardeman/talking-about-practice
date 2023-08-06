// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

const areYouPlayingBanjo = name => name.toLowerCase().startsWith("r") ? `${name} plays banjo` : `${name} does not play banjo`

// another solution

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// explanation

// uses bracket notation instead of startsWith(), but really i just like how they used the ternary for just the 'play'/'does not play' part of the string.