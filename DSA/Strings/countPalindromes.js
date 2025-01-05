function countPalindromes(str, isPalindrome, calculateCount) {
  // Brute-force: TC- O(n^3)
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     let tempStr = "";
  //     for (let j = i; j < str.length; j++) {
  //       tempStr += str[j];
  //       count += isPalindrome(tempStr) ? 1 : 0;
  //     }
  //   }
  //   return count;

  
  // Better appr: TC- O(n^2) | SC- O(1)
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += calculateCount(str, i, i);
    count += calculateCount(str, i, i + 1);
  }

  return count;
}

function calculateCount(str, left, right) {
  let count = 0;
  while (left >= 0 && right < str.length) {
    if (str[left--] === str[right++]) {
      count++;
    } else break;
  }
  return count;
}

function isPalindrome(str) {
  // str can be even or odd;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

let str = "aabbba";
console.log(countPalindromes(str, isPalindrome, calculateCount));
