function twoSum() {
  let arr = [2, 4, 1, 6, 7, 3];
  const target = 11;

  // bruteforce: TC- O(n^2)
  // Two loops to check if sum of two diff. elems equals to a given target.

  // Better approach: TC- O(nlogn) | Sorting, but distort the array
  //   arr.sort(); // [1, 2, 3, 4, 6, 9]
  //   let left = 0;
  //   let right = arr.length - 1;

  //   while (left < right) {
  //     let sum = arr[left] + arr[right];
  //     if (sum === target) {
  //       return [left, right];
  //     } else if (sum < target) {
  //       left++;
  //     } else right--;
  //   }

  //   return []; // pair doesnt exist

  //Optimal app.: TC- O(n) | SC- O(n) | Checking if (target - value) exist in map
  const myMap = new Map();
  for (const i in arr) {
    let remainingValue = target - arr[i];
    if (myMap.has(remainingValue)) return [+i, +myMap.get(remainingValue)];
    myMap.set(arr[i], i);
  }
  return [];
}
console.log(twoSum());
