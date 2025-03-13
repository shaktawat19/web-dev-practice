// Any problem related to max substring or so,
//  start thinking about sliding window/2-pntr

function solve(str) {
  // Bruteforce: TC- O(n^2) | SC- O(256)
  //   let maxLength = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     let mp = new Map();
  //     let len = 0;
  //     for (let j = i; j < str.length; j++) {
  //       if (mp.has(str[j])) break;
  //       mp.set(str[j], 1);
  //       len = j - i + 1;
  //       maxLength = Math.max(len, maxLength);
  //     }
  //   }
  //   return maxLength;


  // Optimal:
  let uniqueChars = new Set();
  let l = 0, r = 0, maxLen = 0;
  while(r < str.length) {
    if(!uniqueChars.has(str[r])){
      uniqueChars.add(str[r]);
      maxLen = Math.max(maxLen, uniqueChars.size);
      r++;
    } else {
      uniqueChars.delete(str[l]);
      l++;
    }
  }

  return maxLen;
}

let str = "cadbzabcd";
console.log(solve(str));

