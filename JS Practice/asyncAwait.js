// async is a keyword that is used to create async functions
// async is a keyword which is used with functions and async functions are different things. Await only can be used inside async functions to handle promises and promises are asynchronus.
// async function always returns a promise
// If this function doesn't return a promise by itself then it wrap the value inside a promise and return a promise
// async function getData() {
//   return "Namaste";
// }

// const p = new Promise(function (resolve, reject) {
//   resolve("Inside Promise");
// });
// async function getData() {
//   return p;
// }

// const data = getData();
// data.then((res) => {
//   console.log(res);
// });
// console.log(data);

// async and await are used to handle promises
// await can only be used inside an async functions
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Inside Promise");
  }, 10000);
});

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Inside Promise 1");
  }, 20000);
});

// async function handlePromise() {
//   console.log("welcome to promise");

//   const res = await p;
//   console.log(res);
//   console.log("after promise");

//   const res1 = await p1;
//   console.log(res1);
//   console.log("after promise 1");
// }

// function demo() {
//   console.log("inside demo promnise");
// }
// handlePromise();
// demo();

// function getData() {
//   p.then((res) => {
//     console.log(res);
//   });
//   console.log("after promise");
// }
// getData();

// fetch() => Response Object => Body(radable stream) => to convert to json file => use ".json" => json also return a promise => res
// when we have aync and await then use "try" and "catch" for handling errors
const API_URL = "https://random.com";
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const res = await data.json();

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();
// also can use error handling like below without try catch
// handlePromise().cathc(err => console.log(err));
