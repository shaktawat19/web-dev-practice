let str1 = "haash";
let str2 = "ahshs";

function isValidAnagram(s1, s2) {
  // Brute-force:
  //   return s1.split("").sort().join("") === s2.split("").sort().join("");

  // Better approach:
  // same str size
  if (s1.length !== s2.length) return false;

  // matching character's freq ?
  let myMap = new Map();
  for (let i = 0; i < s1.length; i++) {
    myMap.set(s1[i], myMap.has(s1[i]) ? myMap.get(s1[i]) + 1 : 1);
  }

  for (let j = 0; j < s2.length; j++) {
    if (myMap.has(s2[j])) {
      myMap.get(s1[j]) === 1
        ? myMap.delete(s1[j])
        : myMap.set(s1[j], myMap.get(s1[j]) - 1);
    } else return false;
  }

  return true;
}
console.log(isValidAnagram(str1, str2));
