const executor = (resolve, reject) => {
  console.log("generating number...");
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 10) {
      resolve(`Random number generated successfully ${randomNumber}.`);
    } else {
      reject("Failed to generate number less than 10 !!");
    }
  }, 1000);
};

function CustomPromise(executor) {
  const PENDING = "pending";
  const FULFILLED = "fulfilled";
  const REJECTED = "rejected";

  let state = PENDING;
  let value = null;

  let successHandlers = [];
  let errorHandlers = [];

  function resolve(val) {
    console.log("success handlers: ", successHandlers);

    if (state === PENDING) {
      value = val;
      state = FULFILLED;
      successHandlers.forEach((fn) => fn(value));
    }
  }
  function reject(reason) {
    if (state === PENDING) {
      value = reason;
      state = REJECTED;
      errorHandlers.forEach((fn) => fn(value));
    }
  }

  this.then = function (callback) {
    return new CustomPromise((resolve, reject) => {
      function handleSuccess() {
        try {
          const result = callback ? callback(value) : value;
          if (result && typeof result.then === "function")
            result.then(resolve, reject);
          else resolve(result);
        } catch (error) {
          reject(error);
        }
      }

      if (state === FULFILLED) setTimeout(handleSuccess, 0);
      else if (state === PENDING) successHandlers.push(handleSuccess);
    });
  };

  this.catch = function (errorCallback) {
    return this.then(null, errorCallback);
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const generateNumber = new CustomPromise(executor);

generateNumber
  .then((result) => {
    // Random number generated successfully <random Number>
    console.log(result);
  })
  .catch((error) => {
    // Failed to generate a number less than 10 !!
    console.log(error);
  });
