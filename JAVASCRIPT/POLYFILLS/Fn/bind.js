Function.prototype.customBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not bind on a fn");
  }

  const currentContex = context || globalThis;
  const originalFn = this;

  return function (...newArgs) {
    return originalFn.call(currentContex, ...args, ...newArgs);
  };
};

// usage
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Harsh" };

const boundGreet = greet.customBind(person, "Hello");
console.log(boundGreet("!")); // Output: "Hello, Harsh!"
