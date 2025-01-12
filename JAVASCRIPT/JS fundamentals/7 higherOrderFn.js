// A fn which takes or returns another fn is k/a hof.

const radius = [1, 2, 3, 5];
const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = (radius, func) => {
  const output = [];
  for (let idx in radius) {
    output[idx] = func(radius[idx]);
  }
  console.log(output);
};
calculate(radius, area);
const ans = radius.map(area); // This is almost similar to wht our calculate fn is doing.

// To  make our syntax also to radius.calculate(area), just add calculate in Array-prototype :
Array.prototype.myMap = function (func) {
  // Note: here, dont use arrow fn, as that won't work.
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(func(this[i], i, this));
  }
  return output;
};
// console.log(radius.myMap(area));
