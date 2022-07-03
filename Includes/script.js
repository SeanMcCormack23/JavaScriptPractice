const lottoNums = [
  12,23,7,10,4,25,32
]
var matchOne = lottoNums.includes(23);
console.log(matchOne); //true

var matchTwo = lottoNums.includes(12,7);
console.log(matchTwo); //false

