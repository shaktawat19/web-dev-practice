function solve(nums) {
  //Bruteforce: Generate all subarrays. TC- O(n^n), SC- O(1)
  //   let maxLength = 0;
  //   let mySet = new Set();

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i; j < nums.length; j++) {
  //       mySet.add(nums[j]);
  //       if (mySet.size <= 2) maxLength = Math.max(maxLength, j - i + 1);
  //       else break;
  //     }
  //     mySet.clear();
  //   }

  //   return maxLength;

  /////////////////////////////////////////////////////////////////////////////

  // Two Pointers approach: TC- O(n), SC- O(1)
  let maxLength = 0;
  let myMap = new Map();
  let left = 0,
    right = 0;
  while (right < nums.length) {
    myMap.set(
      nums[right],
      myMap.has(nums[right]) ? myMap.get(nums[right]) + 1 : 1
    );
    if (myMap.size > 2) {
      myMap.set(nums[left], myMap.get(nums[left]) - 1);
      if (myMap.get(nums[left]) === 0) myMap.delete(nums[left]);
      left++;
    }

    if (myMap.size <= 2) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    right++;
  }

  return maxLength;
}
const arr = [2, 3, 3, 3, 4, 1, 5, 5, 5, 5, 6, 6, 6, 6];
console.log(solve(arr));
