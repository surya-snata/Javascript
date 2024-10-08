// Asynchronous Operation in JS

// Promise
// promise are used to handle async operations in js.
// They represent a value that may be available now, in the future, or never.
// It has 3 states :
// 1. Pending
// 2. Fulfilled
// 3. Rejected
// We can use the then() method to handle tghe fulfilled state and then catch() method to handle
// the rejected state.

// JSON :
// JSON stands for Javascript Object Notation.
// It is a lightweight data interchange format that is easy to read and write.
//
//
//
//

// Fetch method:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error Occured", error);
//   });

// async and await
// const fetchData = async () => {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

// setTimeout:
// setTimeout() is used to execute a function once after a specified delay(in milliseconds)
// Syntax : setTimeout(()=>{
//    code to be executed
//  }, 1000)

const reminder = (task) => {
  console.log(`Reminder set for ${task}`);
  setTimeout(() => {
    console.log(`Time is up! ${task} is due`);
  }, 3000); // 5sec(5*1000)
};
// reminder("Drink water");  // call or invoke

// setInterval :
// setInterval() is used to repeatedlyexecute a function after a specified interval(in milliseconds)
// Syntax : setInterval(()=>{
//    code to be executed
//  }, 1000)

const countDown = (seconds) => {
  let counter = seconds;
  let intervalID = setInterval(() => {
    if (counter === 0) {
      clearInterval(intervalID);
    } else {
      console.log(`Need to wait for ${counter}secs`);
      counter--;
    }
  }, 1000);
};
countDown(10);
