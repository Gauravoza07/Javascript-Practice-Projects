let score = "33aaff"

console.log(typeof score)

let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);

//Number converted to number
//string does not cnverted output->NaN
//bool value converted to 1 or false to 0

let logedIn= 1;
// console.log(logedIn);

let numberToBool = Boolean(logedIn);
console.log(numberToBool);
console.log(typeof numberToBool);

//1->true  ,  0->false
//""->false  ,  "String"->true

let num=11;
let stringNumber = String(num);
console.log(stringNumber);
console.log(typeof stringNumber);