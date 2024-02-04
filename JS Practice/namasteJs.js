// setTimeoot, closure
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("Namaste Javascript");
// }
// x();

// function declaration/ function statement
function close() {
  console.log("function declaration");
}

// function exression
const close1 = function () {
  console.log("function exression");
};

// arrow function
const close2 = () => {
  console.log("arrow function");
};

// First class functions/First class Citizens - Ability to use functioons as a value, pass a function as a argument, return a function inside another function
