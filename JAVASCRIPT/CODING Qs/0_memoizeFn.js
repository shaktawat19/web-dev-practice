function memoize(fn) {
  let cache = {};
  return function (...args) {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log("from cache:");
      return cache[argsToString];
    } else {
      console.log("computed:");
      const result = fn.apply(null, args);
      cache[argsToString] = result;
      return result;
    }
  };
}

let addNums = (a, b) => a + b;
const memoizedFn = memoize(addNums);
// console.log(memoizedFn(1, 2));
// console.log(memoizedFn(1, 2));

// Q.1 Factorial using memoizeFn
function factorial(num) {
    if(num === 0) return 1;
    return num * memoizedFactorial(num-1);
}
let memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(5));


