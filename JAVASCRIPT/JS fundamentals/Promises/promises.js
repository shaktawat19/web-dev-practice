// Promise object is a placeholder for a certain period of time until it recieves value from asynchronous operation.
// Promise : An object representing eventual completion or failure of an asynchronous operation.

// Promise.resolve(2)
// .then(res => res * 2)
// .finally(res => {     // "finally netiher accept nor return anything"
//   console.log("finallly..");
// })
// .then(res => {
//   console.log(res);
// })

// console.log("start");
// const sub = new Promise((resolve, reject) => {
//   console.log("promise start");
//   setTimeout(() => {
//     console.log("inside timeout");
//     const result = true;
//     if (result) resolve("passed!");
//     else reject(new Error("Nope"));
//   }, 2000);
//   console.log("promise end");
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("stop");

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })
// promise1.then( res => {
//     console.log(res);
// });
// console.log("end");

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// })
// promise1.then(res => console.log(res));
// console.log("end");

// console.log("start");
// const fn = () => {
//   console.log("fn called");
//   return new Promise((resolve, reject) => {
//     console.log("promise start");
//     resolve("success");
//   });
// };
// console.log("middle");
// fn().then((res) => {
//   console.log(res);
// });
// console.log("end");

// function job() {
//   return new Promise(function (res, rej) {
//     console.log("inside promise");
//     rej();
//   });
// }
// let promise = job();
// console.log(1);
// promise
//   .then(() => {
//     console.log("success 1");
//   })
//   .catch(() => {
//     console.log("error");
//   })
//   .then(() => {
//     console.log("success 2");
//   });
// console.log(2);

// function job(state) {
//   return new Promise(function (res, rej) {
//     if (state) {
//       res("success");
//     } else {
//       rej("error");
//     }
//   });
// }
// let promise = job(true);
// promise
//   .then((data) => {
//     console.log(data);
//     return job(false);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     return "error caught"; // not a promise, just text.
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function job(state) {
//   return new Promise(function (res, rej) {
//     if (state) {
//       res("success");
//     } else {
//       rej("error");
//     }
//   });
// }
// let promise = job(true);
// promise
//   .then((data) => {
//     console.log(data);
//     return job(true);
//   })
//   .then((data) => {
//     if (data !== "victory") {
//       throw "Defeat"; // means thowing error, a promise
//     }
//     return job(true); // this wont run
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     return "error caught";
//   })
//   .then((data) => {
//     console.log(data);
//     return new Error("test"); // not a promise, jst a text.
//   })
//   .catch((err) => {
//     console.log(`${err}, ...`);
//   })
//   .then((data) => {
//     console.log("vhgjgh", data);
//   });

// const firstPromise = new Promise((res, rej) => {
//   res("First");
// });
// const secondPromise = new Promise((res, rej) => {
//   res(firstPromise);
// });
// secondPromise
//   .then((res) => res)
//   .then((res) => {
//     console.log(res);
//   });

// function looper() {
//     for (var i = 0; i < 5; i++) {
//         (function (j) {
//             setTimeout(() => {
//                 console.log(j);
//             }, 1000)
//         })(i)
//     }
// }
// looper();

// console.log("before promise start");
// const promise3 = new Promise((resolve, reject) => {
//   console.log("Inside promise");
//   setTimeout(() => {
//     reject("promise reject error");
//   }, 0);
// });
// console.log("after promise");
// console.log("promise3:", promise3);
// promise3.then((data) => console.log(data)).catch((err) => console.log(err));
// console.log("after promise ends");

// Q2
function one() {
  const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
  return promise1;
}
function two() {
  const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 1000);
  });
  return promise2;
}
function three() {
  const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
      rej(3);
    }, 2000);
  });
  return promise3;
}
async function test() {
  try {
    // as soon as we get frst err, catch block will execute.
    // const resp1 = await one();
    // const resp2 = await two();
    // const resp3 = await three();
    // console.log("response: " + (resp1 + resp2 + resp3));
    // console.log(typeof resp1);

    const output = await Promise.allSettled([one(), two(), three()]);
    console.log("output: ", output);
  } catch (err) {
    console.log("error: ", err);
  } finally {
    console.log("finally");
  }
}
// test();

// Q3
async function getUserData() {
  // promise chaining is done here.
  console.log("inner");
  let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
  let response2 = await fetch("https://jsonplaceholder.typicode.com/users");
  let response3 = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response1);
  
  console.log("After all promise is executed");
}
getUserData();
console.log("Hello World");
