var myMame = "Harsh";

const getThrough = function () {
  console.log(this); // gives window obj on browser, and global obj in vscode.
  console.log(this.myMame); // gives undefined here, but prints harsh on browser.
};
getThrough();

const getThroughArrow = () => {
  console.log(this); // gives window on browser, and empty obj in vscode
  console.log(this.myName); // gives undefined
};
getThroughArrow();



let obj = {
  name: "harsh",
  getName: function () {
    console.log(this.name); // gives harsh
  },
  getThroughArrow: () => {
    console.log(this.name); // gives undefined
  },
  parentFn: function () {
    const arrFn = () => {
      console.log(this.name); // gives harsh, bcoz its parent fn has reference to obj object.
    };
    arrFn();
  },
};
obj.parentFn();
obj.getThroughArrow();

// Q1:
let obj1 = {
  name: "harsh",
  getName: function () {
    const name = "someone";
    console.log(this.name); // gives harsh
  }
};
obj1.getName();

// Q2:
function user() {
  return {
    name: "Harsh",
    ref: this,
    workingRef: function () {
      return this;
    },
  };
}
let use = user();
// console.log(use.ref); // gives window obj on browser, and global obj here. Bcz parent of user() is global/window.
// console.log(use.ref.name); // nothing
// console.log(use.workingRef().name); // gives harsh, bcz workingRef() has a  parent obj, which contains name.

//Q3:
const userr = {
  name: "Harsh",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(userr.logMessage, 1000); // undefined/nothing
setTimeout(() => {
  userr.logMessage(); // harsh
}, 1000);

//Q4:
let calci = {
  read(){
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },
  sum(){  return this.a + this.b ; },
  mult(){ return this.a * this.b ; }
}
calci.read();
console.log(calci.sum());
console.log(calci.mult());

// //Q5:
var length = 4;
function callback() {
  console.log(this.length);
}
// const object = {
//   length: 5,
//   method(fn){
//     fn(); // prints 4 in browser, undefined in vscode
//   }
// }
// object.method(callback);

//Q6:
var length = 4;
function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method(){
    arguments[0](); // prints 3,since arguments array is parent of callback() here, and length of arguments array is 3
  }
}
object.method(callback, 2, 4);

//Q7:
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multi(b) {
    this.total *= b;
    return this;
  },
};
const result = calc.add(10).add(5).multi(10);
console.log(result.total);




