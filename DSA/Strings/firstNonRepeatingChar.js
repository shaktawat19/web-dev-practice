let str = "abcdcba";

function firstNonRepeating(str) {
  /* Brute force: TC O(n^2) | SC O(1)
  for (let i = 0; i < str.length; i++) {
    let flag = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      return str[i];
    }
  }
  return null;
  */

  // Approach 2: TC O(n) | SC O(n)
  let myMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i])) {
      myMap.set(str[i], 0);
    } else {
      myMap.set(str[i], 1);
    }
  }

  for (const [key, value] of myMap) {
    if (value === 1) return key; // non-repeating char
  }

  return null; // means all are repeating
}

console.log(firstNonRepeating(str));
