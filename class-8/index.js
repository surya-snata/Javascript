// Nums and Mathematics :

// const decimal = 12.012054;
// console.log(decimal.toPrecision(5)); // 12.012

// console.log(decimal.toLocaleString("en-IN")); // 12.012

// ------------------Math--------------

// console.log(Math); // Object [Math] {}

// console.log(Math.PI); // 3.141592653589793

// console.log(Math.abs(-12.5)); // 12.5
// console.log(Math.ceil(12.5)); // 13
// console.log(Math.floor(12.5)); // 12
// console.log(Math.max(12, 15, 18, 45)); // 45
// console.log(Math.min(12, 15, 18, 45)); // 12
// console.log(Math.pow(4, 2)); // 16
// console.log(Math.round(12.5)); // 13
// console.log(Math.sqrt(25)); // 5

// Task-1 :
// Write a program to generate random number between 0 to 1

// const random = Math.random();
// console.log(random);

// Task-2 :
// Write a program to generate random number between 1 to 6

const start = 1;
const end = 6;
const random = Math.floor(Math.random() * (end - start + 1)) + start;
console.log(random);
