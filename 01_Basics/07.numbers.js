const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

//****************Maths */

// console.log((Math));//predefined object in JavaScript

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(6.7));
// console.log(Math.floor(8.9));

// console.log(Math.random());//returns between 0 and 1
// console.log(Math.floor((Math.random() * 10)) + 1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let l = Math.floor(Math.random() * 255) + 1;
let m = Math.floor(Math.random() * 255) + 1;
let n = Math.floor(Math.random() * 255) + 1;
console.log(`rgb(${l},${m},${n})`);