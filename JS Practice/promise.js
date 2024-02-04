// Promise are immutable

// const GITHUB_URL = "https://api.github.com/users/braja123";

// const users = fetch(GITHUB_URL);
// console.log(users);

// users.then(function (data) {
//   console.log(data);
// });

const cart = ["shoes", "kurta", "dress"];

const validateOrder = (cart) => {
  return false;
};

const createOrder = (cart) => {
  const pr = new Promise((resolve, reject) => {
    if (!validateOrder(cart)) {
      const err = new Error("Invalid cart");

      reject(err);
    }
    const orderId = 12345;
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
};

const proceedtoPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    resolve("Payment Completed");
  });
};

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })

  .then((orderId) => {
    return proceedtoPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.log("I will fetch the order anythig happen");
  });
