// Encapsulation means that is to enclose a mixture of something inside a capsule.

// var users = {
//   email: "gopal@gmail.com",
//   name: "gopal",
//   login() {
//     console.log(this.name, "has loggedin");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };

// users.email = "sanu@gmail.com";

// var prop = "name";

// console.log(users[prop]);

// 'new' keyword create a new empty object
// sets the value of 'this' to be in new object
// call the constructor method

// class Users {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//   }
//   login() {
//     console.log(this.email, "has logged in");
//     return this;
//   }
//   logout() {
//     console.log(this.email, "has logged out");
//     return;
//   }
//   updateScore() {
//     this.score++;
//     console.log(this.email, "score is now", this.score);
//     return this;
//   }
// }

// class Admin extends Users {
//   deleteUser() {
//     console.log("delete user");
//   }
// }

function Users(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

Users.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};
Users.prototype.logout = function () {
  this.online = true;
  console.log(this.email, "has logged out");
};

function Admin(...args) {
  Users.apply(this, args);
}

Admin.prototype = Object.create(Users.prototype);

Admin.prototype.deleteUser = function () {
  console.log("Delete User");
};

const userOne = new Users("gopal@gmail.com", "gopal");
const userTwo = new Users("sanu@gmail.com", "sanu");
const admin = new Admin("admin@gmail.com", "Dipa");

// userOne.login().updateScore().updateScore().logout();
userOne.login();
userTwo.logout();
