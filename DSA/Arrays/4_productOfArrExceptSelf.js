function solve(arr) {
  let output = [];

  // Brute: TC- O(n^2) | SC-O(n)
  //   for (let i = 0; i < arr.length; i++) {
  //     let multiplier = 1;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (i !== j) {
  //         multiplier *= arr[j];
  //       }
  //     }
  //     output[i] = multiplier;
  //   }
  //   return output;

  
  // Better: TC- O(n) | SC-O(n)
  let n = arr.length;
  let leftArr = Array(n).fill(0);
  let rightArr = Array(n).fill(0);
  let outputArr = Array(n).fill(0);

  arr.forEach((elem, i) => {
    if (i == 0) leftArr[i] = elem;
    else leftArr[i] = elem * leftArr[i - 1];
  }); // [2, 6, 24, 24]

  for (let i = n - 1; i >= 0; i--) {
    if (i == n - 1) rightArr[i] = arr[n - 1];
    else rightArr[i] = arr[i] * rightArr[i + 1];
  } // [24, 12, 4, 1]

  arr.forEach((elem, i) => {
    if (i == 0) outputArr[i] = rightArr[i + 1];
    else if (i == n - 1) outputArr[i] = leftArr[i - 1];
    else outputArr[i] = rightArr[i + 1] * leftArr[i - 1];
  });

  return outputArr; // [12, 8, 6, 24]

  // Optimal: TC- O(n) | SC-O(n) If using extra array | SC-O(1) If modify original arr
  //   let multiplierTotal = 1;
  //   arr.forEach(elem => {
  //     multiplierTotal *= elem;
  //   });

  //   for(let i = 0; i < arr.length; i++){
  //     output[i] = multiplierTotal / arr[i]; // I can also store directly in original arr, but it will disturb the original arr.
  //   }
  //   return output;
}
console.log(solve([2, 3, 4, 1]));
