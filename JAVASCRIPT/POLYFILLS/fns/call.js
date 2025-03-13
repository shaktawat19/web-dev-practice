Function.prototype.customCall = function (context, ...args) {
  const currentContext = context || globalThis;
  //   The context parameter specifies the value of this to be used when calling
  //  the function.
  // If no context is provided, it defaults to globalThis (the global object, which is
  //  window in browsers and global in Node.js).

  const newProp = Symbol();
  //   A Symbol is used to create a unique property key that ensures no existing property
  //  in the context object is overwritten.
  //   This unique key temporarily stores the function that needs to be called.

  currentContext[newProp] = this;
  //   this refers to the function on which customCall is being invoked.
  //   The function is assigned as a property of the currentContext object using the
  //  unique Symbol key.

  const result = currentContext[newProp](...args);
  //   The function is invoked as a method of the currentContext object,
  //  ensuring this inside the function refers to currentContext.
  //   The ...args spread operator is used to pass the arguments to the function

  delete currentContext[newProp];
  //   After the function is executed, the temporary Symbol property is deleted
  //  from the currentContext to avoid polluting the object.

  return result;
  //   The result of the function call is returned to the caller, just like in the
  //  native call method.
};

// usage:
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Harshvardhan" };

const result = greet.customCall(person, "Hello", "!");
console.log(result); // Output: "Hello, Harshvardhan!"
