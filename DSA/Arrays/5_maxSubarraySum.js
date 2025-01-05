function maxSubarraySum(arr) {
  // Brtute: TC- O(n^2)
  //   let largestSum = arr[i];
  //   let startIdx = 0;
  //   let endIdx = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let tempSum = arr[i];
  //     for (let j = i + 1; j < arr.length; j++) {
  //       tempSum = arr[j] + tempSum;
  //       if (tempSum > largestSum) {
  //         largestSum = sum;
  //         startIdx = i;
  //         endIdx = j;
  //       }
  //     }
  //   }
  //   return largestSum;

  // Optimal: TC- O(n) Kadane's Algo
  let sum = 0;
  let largestSum = 0;
  let tempFirstIdx = 0;
  let finalFirstIdx = 0;
  let finalLastIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) tempFirstIdx = i;
    sum = sum + arr[i];
    if (sum > largestSum) {
      largestSum = sum;
      finalFirstIdx = tempFirstIdx;
      finalLastIdx = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  //   return [finalFirstIdx, finalLastIdx]; // returned the arr indices, if asked
  //   return largestSum; // returned the largest sum, if only sum asked
  return {
    sum: largestSum,
    array: arr.slice(finalFirstIdx, finalLastIdx + 1),
  };
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr)); // 6, [4, -1, 2, 1]
