const score = 400;
console.log(score);

const balance = new Number(400);
console.log(balance);  //[Number: 400]

console.log(balance.toString()); // 400
console.log(balance.toFixed(2)); //400.00

const num = 23.5543143;
console.log(num.toPrecision(2)); //24

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//maths

console.log(Math.abs(-4));
console.log(Math.round(-4.3)); //ceil, floor also there
console.log(Math.min(23,12,4,-4,23));
console.log(Math.random());  //0 to 1 range
console.log((Math.random()*10)+1);

//random num b/w min and max
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)

