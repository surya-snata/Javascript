// String :

// How to define
// 1. Using single quotes
//let str1 = "Hello, World!";
//console.log(str1);

// 2. Using double quotes
//let str2 = "Hello, World!";
//console.log(str2);

// 3. Using backticks (template literals)
//let str3 = `Hello, World!`;
//console.log(str3);

// 4. Using new Strings()
//let str4 = new String("Hello, World!");
//console.log(str4);

// My Details :
// Name : Suryasnata
// Age : 22
// Address : Bhubaneswar
// contact : 9898989898

// let name = "Suryasnata";
// let age = "22";
// let address = "Bhubaneswar";
// let contact = "9898989898";

// console.log(name); // Suryasnata
// console.log(age); // 22
// console.log(address); // Bhubaneswar
// console.log(contact); // 9898989898

// console.log("My details :", name, age, address, contact); // My details : Suryasnata 22 Bhubaneswar 9898989898
// console.log("My details :" + name + age + address + contact); // My details :Suryasnata22Bhubaneswar9898989898
// console.log(
//   `my name is ${name}, my age is ${age}, my address is ${address} and my contact no is ${contact}`
// );

// Fun fact
// let score = "100";
// let score2 = 200;

// let number = "Suryasnata";
// console.log(typeof number);

// let str = 5.23;
// console.log(typeof str);

let name_string = "Pablo";
//length : 5
// Start-index : 0
// Last-index : 5-1 = 4

// console.log(name_string.length); // 5
// console.log(`Last index : ${name_string.length - 1}`); // 4
// console.log(name_string[2]); // b
// console.log(name_string[4]); // o
// console.log(name_string[name_string.length - 1]); // o
// console.log(name_string.toUpperCase()); // PABLO
// console.log(name_string.__proto__); // {}
// console.log(name_string.__proto__.__proto__); // {}
// console.log(name_string.charAt(2)); // b
// console.log(name_string.indexOf("o")); // 4

const url = "pramodjena.github.io";
console.log(url.replace(".", "-")); //pramodjena-github.io

const email = "surya@snata@mohanty@gmail.com";
console.log(email.replace("@", ".")); // surya.snata@mohanty@gmail.com

const mail = "pramodjena.com";
console.log(mail.includes(".com")); // true
console.log(mail.includes(".yahoo")); //false

const company_name = new String("Wecode");
console.log(company_name); // [String: 'Wecode']
