// Object :
// An object is a collection of properties, where each property is defined as a key-value pair.
// In Javascript, objects are written is curly brackets {}.
// The key is a string and the value can be any data type.
// Each key-value pair is a separated by a comma.

// Syntax :
// Traditional method or object literal.

let array = [
  "Suryasnata",
  22,
  "Frontened Developer",
  "Bhubaneswar",
  9865898658,
];

// is it really meaningful ..?

// let object = {
//   key1: "value1",
//   key2: 2,
// };

let person1 = {
  name: "Suryasnata",
  age: "22",
  role: "Frontened Developer",
  city: "Bhubaneswar",
  phone: 9865898658,
};

// const value = person.name;
// console.log(typeof value);

// console.log(person1);
// console.log(typeof person1); // object

// Using constructor method :
let person2 = new Object();
person2.name = "Pablo";
person2.age = 45;
person2.role = "Mafia";
person2.city = "Russia";
person2.phone = 5697265625;

// console.log(person2);

// Accessing object :
// You can access the properties of an object using the `dot notation` or the `bracket notation`.

// Using dot notation  :
// console.log(person1.name);
// console.log(person1.age);
// console.log(person2.name);

// Using bracket notation:
// console.log(person1["name"]);
// console.log(person1["age"]);

// Modify object :
// You can modify the properties of an object using the `dot notation` or the `bracket notation`.

person2.name = "Smita";
// console.log(person2);

person2["age"] = 50;
// console.log(person2);

// Delete object :
// We can delete the properties of an object using the delete operator

delete person2.name;
// console.log(person2);

// Task1:
// Create an object called `person3` with the following properties: `name`, `age`,
// `role`, `city`, `phone` and modify the `name` and `age` then delete the `phone`

// Create :

let person3 = {
  name: "Suryasnata",
  age: "23",
  role: "Frontened Developer",
  city: "cuttack",
  phone: 9865898658,
};

// console.log(person3);

// Modify  :

person3.name = "Smita";
// console.log(person3);

person3.age = 50;
// console.log(person3);

// Delete:

delete person3.phone;
// console.log(person3);

// Object keys :
// console.log(Object.keys(person1)); // [ 'name', 'age', 'role', 'city', 'phone' ]

// Object values :
// console.log(Object.values(person1)); // ['Suryasnata','22','Frontened Developer', 'Bhubaneswar',9865898658 ]

// Object entries :
// We can get both key and value

// console.log(Object.entries(person1));

// Object freeze :
Object.freeze(person2);
// console.log(person2);
// console.log((person2.name = "Jagruti"));
// console.log(person2);
// console.log((person2.age = 90));
// console.log(person2);
