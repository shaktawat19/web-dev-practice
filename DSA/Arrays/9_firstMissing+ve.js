function solve(nums) {
  nums.sort(); //  TC- O(nlogn)
  let lastElem = nums[nums.length - 1];

  // Bruteforce: O(nlogn + m⋅n) | WorstCase(O(n^2))
  // for(let i = 1; i < lastElem; i++){     TC- O(m⋅n)
  //     let isPresent = false;
  //     for(let j = 0; j < nums.length; j++){
  //         if(i === nums[j]) {
  //             isPresent = true;
  //             break;
  //         }
  //     }
  //     if(!isPresent) return i;
  // }

  // return lastElem + 1;

  // Better: Hashing | TC- O(m+n) | SC- O(m)
  //   let mp = new Map();
  //   for (let i = 1; i < lastElem; i++) {
  //     mp.set(i, 0);
  //   }
  //   for (let j = 0; j < nums.length; j++) {
  //     mp.set(nums[j], 1);
  //   }
  //   for (const [key, value] of mp) {
  //     if (value === 0) return key;
  //   }

  //   return lastElem + 1;

  
  // optimal:
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    let idx = Math.abs(nums[i]) - 1;
    if (idx < n) {
      nums[idx] *= -1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) return i + 1;
  }

  return n + 1;
}

let nums = [1, 2, 0];
console.log(solve(nums));
