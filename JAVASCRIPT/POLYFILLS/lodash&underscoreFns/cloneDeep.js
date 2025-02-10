function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);

console.log(clone); // { a: 1, b: { c: 2 } }
console.log(clone.b === obj.b); // false (deep clone)
