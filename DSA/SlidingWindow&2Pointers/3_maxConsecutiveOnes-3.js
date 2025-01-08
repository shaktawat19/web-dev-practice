// We can mold the question into "Longest subarray with atmost k zeroes".

function solve(arr, k) {
  // Bruteforce: Generate all subarrays. TC- O(n)
  //   let maxLen = 0,
  //     len,
  //     zeroesCount;
  //   for (let i = 0; i < arr.length; i++) {
  //     (len = 0), (zeroesCount = 0);
  //     for (let j = i; j < arr.length; j++) {
  //       if (arr[j] === 0) {
  //         zeroesCount++;
  //         if (zeroesCount > k) break;
  //       }
  //       len++;
  //     }
  //     maxLen = Math.max(maxLen, len);
  //   }
  //   return maxLen;

  // Better: Sliding wndw. TC- O(2n)
  //   let len = 0,
  //     maxLen = 0,
  //     l = 0,
  //     r = 0,
  //     zeroesCount = 0;
  //   while (r < arr.length) {
  //     if (arr[r] === 0) zeroesCount++;
  //     if (zeroesCount > k) {
  //       while (arr[l] !== 0) {
  //         l++;
  //         len--;
  //       }
  //       zeroesCount--;
  //       l++;
  //     }
  //     len = r - l + 1;
  //     maxLen = Math.max(maxLen, len);
  //     r++;
  //   }
  //   return maxLen;

  // Optimal: TC- O(n)
  let len = 0,
    maxLen = 0,
    l = 0,
    r = 0,
    zeroesCount = 0;
  while (r < arr.length) {
    if (arr[r] === 0) zeroesCount++;
    if (zeroesCount > k) {
      if (arr[l] === 0) zeroesCount--;
      l++;
    }
    if (zeroesCount <= k) {
      len = r - l + 1;
      maxLen = Math.max(maxLen, len);
    }

    r++;
  }
  return maxLen;
}

const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
console.log(solve(arr, k));
