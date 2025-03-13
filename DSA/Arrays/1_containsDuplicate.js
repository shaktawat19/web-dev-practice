function containsDuplicate(array) {
  // Brute force: TC-O(n^2)
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length; j++) {
  //       if (i !== j && array[i] === array[j]) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;

  // Better: TC-O(n) | SC-O(n)
  //   const myMap = new Map();
  //   for (const element of array) {
  //     if (myMap.has(element)) {
  //       return true;
  //     } else {
  //       myMap.set(element, true);
  //     }
  //   }
  //   return false;


  // Optimal: TC-O(1) | SC-O(n)
  const mySet = new Set(array);
  return mySet.size !== array.length;
}
console.log(containsDuplicate([1, 3, 2, 12, 2]));
