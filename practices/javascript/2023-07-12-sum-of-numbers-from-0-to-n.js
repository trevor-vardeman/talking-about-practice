// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return `${count}<0`
    if (count === 0 ) return "0=0"
    let sum = 0
    let output = ""
    for (let i = 0; i < count + 1; i++) {
        sum += i
        if (i === count) {
          output += i
        } else {
          output += `${i}+`
        }
    }
    return `${output} = ${sum}`
  };

  return SequenceSum;

})();