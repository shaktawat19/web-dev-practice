// TYPE-1: Constant Window
//Q: Find Max. sum of 4 consecutive elements in an array.
function solve() {
  const arr = [1, 2, -1, 3, 5, 3, 4];
  const k = 4;
  let left = 0,
    right = k - 1;

  let sum = 0,
    maxSum = 0;
  for (let i = 0; i <= right; i++) {
    sum += arr[i];
  }
  maxSum = sum;

  while (right < arr.length - 1) {
    sum -= arr[left];
    left++;
    right++;
    sum += arr[right];

    maxSum = Math.max(sum, maxSum);
  }

  console.log(maxSum);
}
solve();

// TYPE-2: Longest subarray/substring where <condition>
//Q: Find Longest subarray with sum <= k

// 1. Brute-force Template: Generate all the subarrays(TC- O(n^2))
maxLength = 0;
for (let i = 0; i < size; i++) {
  sum = 0;
  for (let j = i; j < array.length; j++) {
    sum += arr[j];
    if (sum <= k) maxLength = Math.max(maxLength, j - i + 1);
    else if (sum > k) break;
  }
}

// 2. Better Template: sliding wndw/2pntrs
// expand right, shrink left according to need
// TC- O(n+n), SC- O(1)
(left = 0), (right = 0);
sum = 0;
maxLength = 0;
while (right < arr.length) {
  sum += arr[right];
  while (sum > k) {
    sum -= arr[left];
    left++;
  }

  if (sum <= k) {
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
}

// 3. Optimal: Shrinking by just one place



// TYPE-3: No. of subarrays where <condition>
// Solved using TYPE-2

// TYPE-4: Min./shrtest window where <condtion>