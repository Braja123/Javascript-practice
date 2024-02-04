"use strict";
// this keyword inside function is "undefined"
// if we are not using "strict mode" then this keyword will refer to globalObject

// this keyword value depends on how the function is called
console.log(this);

function x() {
  console.log(this);
}
x(); // undefined
window.x(); // global object - window

const obj = {
  a: 10,
  login() {
    console.log(this.a);
  },
};
obj.login();

const obj1 = {
  a: 20,
};

obj.login.call(obj1);

const obj2 = {
  a: 44,
  x: () => {
    console.log(this);
    // arrow function don't have this keyword
    //here "this" keyword behave like enclosing lexical context
  },
};

obj2.x(); // global object - window

const obj3 = {
  a: 44,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj3.x();
