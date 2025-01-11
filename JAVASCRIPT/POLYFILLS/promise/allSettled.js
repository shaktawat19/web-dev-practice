/*
Promise.allSettled() returns a promise that gets resolved when all passed promises are
settled ( either fulfilled or rejected ) and in result 
it gives an array of objects having status and the value/reason of each promise.

Note :- If passed empty [], returns empty [].
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st Promise resolved!");
  }, 1000);
});

const p2 = Promise.resolve("2nd Promise resolved!");

const p3 = 3;

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let status = true;
    if (!status) {
      resolve("4th Promise resolved!");
    } else {
      reject("4th Promise rejected!");
    }
  }, 2000);
});

// Polyfill of Promise.allSettled()
// 1) Using simple for loop
Promise.customAllSettled = function (promisesArray) {
  return new Promise((resolve) => {
    let result = [];
    if (promisesArray.length === 0) resolve(result);

    let completedPromise = 0;

    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i])
        .then((response) => {
          result.push({ status: "Fulfilled", value: response });
        })
        .catch((err) => {
          result.push({ status: "rejected", reason: err });
        })
        .finally(() => {
          completedPromise++;
          if (completedPromise === promisesArray.length) resolve(result);
        });
    }
  });
};

(async () => {
  const result = await Promise.customAllSettled([p1, p2, p3, p4]);
  console.log("result", result);
})();

// 👉 2) Using map method and promise.all()
Promise.customAllSettled2 = function (promisesArray) {
  const transformedpromises = promisesArray.map((promise) => {
    return Promise.resolve(promise)
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });

  return Promise.all(transformedpromises);
};

Promise.customAllSettled2([p1, p2, p3, p4]).then((result) => {
  console.log("result custom using map", result);
});
