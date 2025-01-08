Function.prototype.customApply = function (context, arr = []) {
  // Edge case handling
  if (!Array.isArray(arr)) {
    throw new Error("Second parameter should be array.");
  }

  const currentContext = context || globalThis;

  const newProp = Symbol();
  currentContext[newProp] = this;
  const result = currentContext[newProp](...arr);

  delete currentContext[newProp];
  return result;
};

// usage:
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Harshvardhan" };

const result = greet.customApply(person, ["Hello", "!"]);
console.log(result); // Output: "Hello, Harshvardhan!"
