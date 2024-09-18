// Array :
// An array is data structure in JS that allows you to store multiple values in single variable name.
// These value can be any type(Number, String, Object and etc...)

// Indexed : Each element assigned to a numeric value(Index) and it always starts from 0.
// Mutable : It can be changed or modified.
// Ordered : Elements are stored in a specific order.
// Homogeneous or Heterogeneous : Arrays can be hold same data type or different data type.
// Symbol: []
// Separated by ","

// Examples:
// Create and Array :
let arr = [1, 2, 3, 4, 5];
// let fruits = ["Apple", "Mango", "Orange"];

let mixed = [
  0.5,
  1.25,
  100,
  "Suryasnata",
  "pablo",
  "Escobar",
  true,
  false,
  null,
  undefined,
];

// console.log(arr);
// console.log(fruits);
// console.log(mixed);

// console.log(typeof arr);
// console.log(typeof fruits);
// console.log(typeof mixed);

// Using new Array() constructor:
// let arr1 = new Array(1, 2, 3, 4, 5);
// console.log(arr1);

// Length :
// The length property returns the number of elements in an array.
// It is a read-only property.
// console.log(arr1.length);

// Start index in arr1 - 0
// Start element in arr1 - 1
// End index in arr1 - 4
// End element in arr1 - 5
// What is the index value of element 3 - 2
// What is the element value at index 2 - 3
// What is the element value at index 4 - 5

// Empty array slots :
// If we try to access an index that does not exist, Javascript returns `undefined.
const empty = new Array(5);
// To fill those empthy slots
const filled = new Array(5).fill(0);
// console.log(empty);
// console.log(filled);

// Iterable strings to an array
const str = "Hello, World!";
const newStrArray = Array.from(str);
// console.log(newStrArray);

// Accessing an element :
// We can access an element in an array using its index: [0].
// The index of the first element is `0`.
// The index of the last element is `length - 1`.

// console.log(arr1[0]); // 1

// let fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits[0]);
// console.log(fruits[2]);
// let lastIndex = fruits.length - 1;
// console.log(fruits[fruits.length - 1]);

// Modify elements :
// We can modify an element in an array using its index: [0] =

// fruits[0] = "Grapes";
// fruits[1] = "Banana";
// console.log(fruits); // [ 'Grapes', 'Banana', 'Orange' ]

// Add elements into an array
// 1. Using `push() method
//   - It adds one or more elements to the end of an array.
//   - It returns the new length of the array.
//   - It mutates the original array.
//   - It does not return a new array.

let fruits = ["Apple", "Mango", "Orange"];
// fruits.push("Guava");
// fruits.push("Pineapple");
fruits.push("Guava", "Pineapple", "Watermelon", "Strawberry");
// console.log(fruits);

// 2. Using `unshift()` method
//    - It adds one more elements to the beginning of an array.

fruits.unshift("litchi", "papaya");
// console.log(fruits);

// Remove elements of an array
// 1. Using `pop()` method
//   - It removes the last element of an array.
//   - It returns the removed element.
fruits.pop(); // Strawberry
fruits.pop(); // Watermelon
// console.log(fruits);

// 2. Using `shift()` method
//   - It removes the first element of an array.
//   - It returns the removed element.

fruits.shift(); // litchi
fruits.shift(); // papaya
// console.log(fruits);
// console.log(fruits.shift()); // Apple

// Array methods :
// Array.isArray()
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray("ndfhdjdvhjd")); // false
// console.log(Array.isArray([])); // true

// Flat method :
// The flat() method of array instances created a new array with all sub-array elements concatenated into it
// recursively up to the specified depth.

let mixedArray = ["Pramod", "Pablo", [25, 45], ["BBSR", "Russia"]];
// console.log(mixedArray); // [ 'Pramod', 'Pablo', [ 25, 45 ], [ 'BBSR', 'Russia' ] ]
// console.log(mixedArray.flat()); // [ 'Pramod', 'Pablo', 25, 45, 'BBSR', 'Russia' ]

//  Includes() :
//  The includes() method of Array instances determines whether an array includes a certain value among its
// entries, returning true or false as appropriate.

// console.log(mixedArray.includes("Pramod")); // true
// console.log(mixedArray.includes("Suryasnata")); // false

// Reverse() :
// The reverse() method of Array instances reverses an array in place and returns the reference to the same
// array, the first array element now becoming the last, and the last array element becoming the first.
// In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const array1 = ["one", "two", "three", "four"];
const array2 = [1, 2, 3, 4, 5];
// console.log(array1.reverse()); // [ 'four', 'three', 'two', 'one' ]
// console.log(array2.reverse()); // [ 5, 4, 3, 2, 1 ]

// Join() method :
// The join() method of Array instances creates and returns a new string by concatenating
// all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const array3 = ["My", "name", "is", "Suryasnata"];
// console.log(array3.join()); // My,name,is,Suryasnata
// console.log(array3.join(" ")); // My name is Suryasnata
// console.log(array3.join("-")); // My-name-is-Suryasnata
// console.log(array3.join("_")); // My_name_is_Suryasnata

// Slice() method :
//   The slice() method of Array instances returns a shallow copy of a portion of an array
// into a new array object selected from start to end (end not included) where start and end
// represent the index of items in that array. The original array will not be modified.

const array4 = [
  "My",
  "name",
  "is",
  "Suryasnata",
  "from",
  "cuttack",
  "and",
  "bhubaneswar",
];

const newSliceArray = array4.slice(-4);
// console.log(newSliceArray);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Splice() :
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The array is modified in place, and the return value is an array containing the removed elements.
// Inserting or deleting elements(startIndex) in an array.
// splice(startIndex,DeleteCountValue,"item1","item2"...)

// task-1 :
// Delete B and C and replace with X and Y
const months = ["A", "B", "C", "D", "E", "F", "G"];
months.splice(1, 2, "X", "Y");
// console.log(months); //  ["A", "X", "Y", "D", "E", "F", "G"];

// Delete nothing add "U" and "V" in between "E" and "F"
// ["A", "X", "Y", "D", "E", "F", "G"];
months.splice(5, 0, "U", "V");
// console.log(months); //  ["A", "X", "Y", "D", "E", "U", "V" "F", "G"];
// ["A", "X", "Y", "D", "E", "U", "V", "F", "G"];

// Delete "D" and "E" and replace with "Z" and "Q"
months.splice(3, 2, "Z", "Q");
// console.log(months);

// Sorting :
// Sorting :
// Ascending Order :
const array5 = [5, 2, 8, 1, 9, 1000, 2.5, 5.0001, 0.000001];
// console.log(array5.sort());
// console.log(array5.sort((a, b) => a - b));

// Descending Order :
// console.log(array5.sort((a, b) => b - a));

// Ascending Order :
const array6 = ["A", "BC", "Pramod", "Pablo"];
console.log(array6.sort()); // [ 'A', 'BC', 'Pablo', 'Pramod' ]

// Descending Order :
console.log(array6.reverse()); // [ 'Pramod', 'Pablo', 'BC', 'A' ]
