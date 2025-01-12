// Promise.all([promises]):
/* takes iterable of promises, and return a promise.
  If any of promises passed doesnt fulfil, then returnd promise will be a failure. */
// Proimse.allSettled([promises]):
/* Unlike Promise.all(),
  returned promise contains fullfilled as well as failed promises. */

//////////// Promise.all() :
// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);

// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);

// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
const p4 = Promise.allSettled([1, 2, 3, Promise.reject(400)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  p.then((res) => console.log(res)).catch((err) => console.log(err));
  p2.then((res) => console.log(res)).catch((err) => console.log(err));
  p3.then((res) => console.log(res)).catch((err) => console.log(err));
  p4.then((res) => console.log(res)).catch((err) => console.log(err));
}, 0);

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

///////////Promise.all resolves synchronously if and only if the iterable passed is empty:
const pp = Promise.all([]); // Will be immediately resolved
const pp2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously.

setTimeout(() => {
  console.log(p4);
}, 1000);

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
