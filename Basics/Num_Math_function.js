const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2));//.84

const num2= 87.15221
console.log(num2.toPrecision(4))//87.1

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));//Indian number format

//Math function

console.log(Math.ceil(2.45));
console.log(Math.floor(3.555));
console.log(Math.max(2, 5, 6, 1));
console.log(Math.round(5.44));
console.log(Math.min(2, 5, 6, 1));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);//simple random one digit number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//numbers between 10 to 20