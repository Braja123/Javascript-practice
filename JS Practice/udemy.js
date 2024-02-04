const restaurant = {
  name1: "clasic",
  location: {
    city: "hyd",
  },
  categories: ["Pizza", "Burger", "Coffee", "salad"],
  orderDelivery({ startIndex = 3, mainIndex = 0, time = "20:22", address }) {
    console.log(startIndex, mainIndex, time, address);
  },
};

// const newRes = { foundedIn: 1998, founder: "Gopal", ...restaurant };
// console.log(newRes);

// restaurant.orderDelivery({
//   startIndex: 1,
//   mainIndex: 23,
//   time: "22:44",
//   address: "Hyd, Err",
// });
// restaurant.orderDelivery({
//   time: "22:44",
//   address: "Bls, Bhg",
// });

// const {
//   name1,
//   location: { city },
// } = restaurant;

// console.log(city);

// const arr = [1, 2, 3, 4];
// let a = arr[1];
// let a1 = arr[2];
// let a2 = arr[3];

// const [x, y, z] = arr;

// let [first, , second] = restaurant.categories;
// // console.log(first, second);
// [second, first] = [first, second];
// // console.log(first, second);

// const nested = [2, 4, [5, 6]];

// const [j, b, [c, d]] = nested;

// // console.log(j, b, c, d);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // const { menu = [], starterMenu: starter = [] } = res;

// let a3 = 111;
// let b3 = 333;

// const obj5 = { a3: 22, b3: 33, c3: 23 };
// console.log(obj5);
// ({ a3, b3 } = obj5);
// console.log(a3, b3);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];

// console.log(newArr);
// console.log(...newArr);

// const str = "Gopal";
// const letter = [...str, "s", "n"];

// console.log(...letter);

// const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, other);

// const guests1 = restaurant.numGues ? restaurant.numGues : 10;
// const guests1 = restaurant.numGues || 10;
// console.log(guests1);

// Nullish Colesing - Only works for "undefined and null" (Not 0 or '')
// const guestCorrect = restaurant.guests ?? 10;
// console.log(guestCorrect);

// Logical Assignment Operator
// const rest1 = {
//   name: "La Piazza",
//   numGuests: 0,
// };
// const rest2 = {
//   name: "Capri",
//   owner: "Sanu",
// };

// rest1.numGuests ??= rest1.numGuests || 20;
// rest2.numGuests ||= rest2.numGuests || 30;
// console.log(rest1);
// console.log(rest2);

// for of loop
const menu = restaurant.categories;

// for (let item of menu) {
//   console.log(item);
// }
for (let [index, item] of menu.entries()) {
  console.log(`${index + 1}: ${item}`);
}

// console.log([...menu.entries()]);
