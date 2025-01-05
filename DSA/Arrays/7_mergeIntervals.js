function mergeIntervals(intervals) {
  let start = 0;
  let end = 1;

  intervals.sort((a, b) => a[start] - b[start]);
  console.log(intervals);

  let prev = intervals[0];
  let output = [prev];

  for (const curr of intervals) {
    if (curr[start] <= prev[end]) {
      prev[end] = Math.max(curr[end], prev[end]);
    } else {
      output.push(curr);
      prev = curr;
    }
  }

  return output;
}

let intervals = [
  [5, 10],
  [1, 3],
  [8, 12],
  [4, 6]
];
console.log(mergeIntervals(intervals)); // [[1,3], [4,10], [8, 12]]
