function fib(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let output = [0, 1];
  for (let i = 2; i < n; i++) {
    output.push(output[i - 1] + output[i - 2]);
  }
  return output;
}

let n = 4;
const fibElements = fib(n);
console.log(fibElements); // [0, 1, 1, 2]
