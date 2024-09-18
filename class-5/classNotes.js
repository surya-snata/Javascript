// BigInt :
// BigInt is a primitive data type in JavaScript. It is used to represent a whole number that is
// larger than the maximum limit of the Number data type. It is used to represent large integers.

let bigInt = 10000000000000000000000000000000000000000000000000000000000000000000000000;
// console.log(bigInt); // 1e+73

// Symbol :
// Symbol is a primitive data type in JavaScript. It is used to create a unique identifier for an
// object's property. It is used to prevent property name collisions.

let symbol1 = Symbol("abc");
let symbol2 = Symbol("abc");
// console.log(symbol1); // Symbol(abc)
// console.log(symbol2); // Symbol(abc)
// console.log(symbol1.description); // abc
// console.log(symbol2.description); // abc
// console.log(symbol1 === symbol2); // false

// NaN : Not a Number
// NaN is a primitive data type in JavaScript. It is used to represent a value that is not
// a number. It is used to represent the result of a mathematical operation that cannot be
// performed.

let num3 = 10 / 0;
// console.log(num3); // NaN / Infinity

// Boolean :
// Boolean is a primitive data type in JavaScript. It is used to represent a logical value that
// can be either true or false.

let boolean1 = true;
let boolean2 = false;
// console.log(boolean1);
// console.log(boolean2);

let boolean3 = " ";
// boolean3 ? console.log("true") : console.log("false");
