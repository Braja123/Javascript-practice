"use strict";

// let name = {
//   firstName: "Gopal",
//   lastName: "das",
// };

// function printFullName(home, loc) {
//   console.log(`${this.firstName} ${this.lastName} ${home} ${loc}`);
// }

// let name1 = {
//   firstName: "braja",
//   lastName: "das",
// };

// // name.printFullName();

// // function borrowing
// printFullName.call(name1, "bls", "odisha");
// printFullName.apply(name1, ["bls", "odisha"]);
// let res = printFullName.bind(name1, "bls", "hyd");
// console.log(res());

// polyfil for bind method
// let name = {
//   firstName: "Gopal",
//   lastName: "das",
// };

// function printFullName(home, loc) {
//   console.log(`${this.firstName} ${this.lastName} ${home} ${loc}`);
// }

// // let res = printFullName.bind(name, "bls");
// // res("odisha");

// Function.prototype.myBind = function (...args) {
//   let obj = this;
//   return function (...args1) {
//     obj.apply(args[0], [...args.slice(1), ...args1]);
//   };
// };

// let res1 = printFullName.myBind(name, "bls");
// res1("odisha");

// // polyfil for call
// printFullName.call(name, "bls", "odisha");

// Function.prototype.myCall = function (context, ...args) {
//   // here basically we add one method to context object and we pass our function to that method inside obj, then calls the arguments;
//   context.fn = this;
//   context.fn(...args);
// };
// printFullName.myCall(name, "bls", "odisha");

// // polyfil for apply
// printFullName.apply(name, ["bls", "odisha"]);

// Function.prototype.myApply = function (context, ...args) {
//   // here basically we add one method to context object and we pass our function to that method inside obj, then calls the arguments;
//   context.fn = this;
//   context.fn(args);
// };
// printFullName.myApply(name, ["bls1", "odisha1"]);

// debouncing
// const getData = function () {
//   // call api
//   console.log("Fetching Data...");
// };

// function debouncing(getdata, d) {
//   let timer;
//   // console.log(timer);
//   return function () {
//     clearTimeout(timer);

//     timer = setTimeout(function () {
//       getdata();
//     }, d);
//   };
// }

// const doSomeMagic = debouncing(getData, 1000);

// Throttling
// const getData = function () {
//   console.log("Fetching...");
// };

// const throttling = function (fn, d) {
//   let flag = true;

//   return function () {
//     let obj = this;
//     let params = arguments;
//     console.log("obj", obj);
//     console.log("params", params);
//     if (flag) {
//       fn.apply(obj, params);
//       flag = false;
//       setTimeout(function () {
//         flag = true;
//       }, d);
//     }
//   };
// };

// const doSomeMagic = throttling(getData, 1000);
// doSomeMagic("gopal");

// event bubbling and triggling/capturing
// document.querySelector("#grand-child").addEventListener(
//   "click",
//   () => {
//     console.log("Inside Grand Parent");
//   },
//   true
// );
// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Inside Parent");
//   },
//   false
// );
// document.querySelector("#child").addEventListener(
//   "click",
//   (e) => {
//     console.log("Inside Child");
//     e.stopPropagation();
//   },
//   true
// );

// Event Delegation
// Event Delegation is the technique of handling events in our webpage in a better way.
// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e.target.id);
//   if (e.target.tagName === "LI") {
//     window.location.href = "/" + e.target.id;
//   }
// });

// document.querySelector("#form").addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.target.dataset.uppercase !== undefined) {
//     e.target.value = e.target.value.toUpperCase();
//   }
// });
// Pros of EventDelegation - Saves a lot of memory, DOM manupulation will be less
// Cons of EventDelegation - ED not works for all the events like: blur, focus, resize, etx(as they wont bubbled up) and if you are using "e.stopPropagation()" in any of the child then ED won't work .

// localStorage - setItem(key, value), getItem(key), removeItem(key), clear(),
// JSON.stringify() - used if wanted to pass object in localStorage
// JSON.parse() - used if wanted to get data from localStorage

// Sum of number
// sum(1)(2)
// const sum = (a) => (b) => b ? sum(a + b) : a;

// let res = sum(1)(2)(3)(4)(5)();
// console.log("res", res);

document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
