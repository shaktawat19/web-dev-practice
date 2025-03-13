// TC- O(2k)

function solve(arr, k) {
  let sum = 0,
    maxSum = 0,
    left = k - 1,
    right = arr.length,
    leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < k; i++) {
    leftSum += arr[i];
  }

  sum = leftSum;
  maxSum = leftSum;
  while (right >= arr.length - k) {
    if (left >= 0) {
      leftSum -= arr[left];
      left--;
    }

    right--;
    rightSum += arr[right];

    sum = leftSum + rightSum;
    maxSum = Math.max(sum, maxSum);
  }

  console.log(maxSum);
}

let arr = [6, 2, 3, 4, 7, 2, 1, 7, 1],
  k = 4;
solve(arr, k);
