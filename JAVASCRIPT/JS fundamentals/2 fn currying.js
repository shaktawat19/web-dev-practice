// Fn currying : Fn with multiple arguments into a sequence of nesting fns.

// 1. binding : So this multiply fn can be used multiple times by binding and providing diff. params.
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy2 = multiply.bind(this, 2); // If we pass arguments here, then it can't be overwritten later through args of multiplyBy2 fn.
// multiplyBy2(5); // here 5 will be assign to y, as we have already assigned 2 to x during binding.

// 2. closures
let mult = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multBy2 = mult(2);
// multBy2(5);

//Q.
const evaluate = (type) => (a) => (b) =>
  (type === "sum" && a + b) || (type === "mul" && a * b);
console.log(evaluate("mult")(5)(5));

//Q. Infinite currying: sum(1)(2)(4)...
const sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    return a;
  };
};
// console.log(sum(1)(2)());

//Q. Convert normal fn to a curry fn
const sumFn = (a, b, c) => a + b + c;
const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) return func(...args);
    else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
};
const curriedFn = curry(sumFn);
// console.log(curriedFn(1)(5)(5));


// Q. add(10)(20) add(10,20)
function add(x) {
  if (arguments.length > 1) {
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
      sum += arguments[i];
    }
    console.log(sum);
  } else {
    return function (z) {
      console.log(x + z);
    };
  }
}
// add(10)(20);
// add(10, 20, 30);


