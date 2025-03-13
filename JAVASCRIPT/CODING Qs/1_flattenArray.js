let arr = [[1, 2, [3, [4]]], 9, [10, 11]];
let result = [];

function flatten(arr) {
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      flatten(elem);
    } else {
      result.push(elem);
    }
  });
}
flatten(arr); // [1, 2, 9, 10, 11]
// console.log(result);


// Reduce method approach:
function flat(arr) {
  return arr.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      prev.push(...flat(curr));
    } else {
      prev.push(curr);
    }
    return prev;
  }, []);
}
console.log(flat(arr));