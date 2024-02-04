// promise.all() return array of promises
// if any of the promise are rejected then that time it will through the error, it won't wait eventualy other promises got resolved or not

// promise.allSettled
// if any of the promise got rejected then also it will wait for all promises to settled
// irrespective of success or faliure it will give all the results

// promise.all() and promise.allSettled() they both are same but error handling are different

// promise.race() is also takes array of promises
// whatever promise settled first you will get the results(either reolve or rejected). It will not wait for other promises to settle
// In the array it will give the value of the first settled promise

// In the case of promise.race() the first settled promise, whether it is success or failure it will return the result

// settled - got the result(whether resolve/success/fullfilled or reject/failure/rejected)

// Promise.any() will wait for the first settled success, if all promises rejected/fails then it will give you aggregate error

// promise.any() takes array of promises
// it will wait for first promise to successful/resolve
// If all the promises got rejected then the result will be list/array of errors

const p1 = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve("P1 Success");
  //   }, 3000);
  setTimeout(() => {
    reject("P1 Success");
  }, 3000);
});
const p2 = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve("P2 Success");
  //   }, 1000);
  setTimeout(() => {
    reject("P2 Fail");
  }, 1000);
});
const p3 = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve("P3 Success");
  //   }, 2000);
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
