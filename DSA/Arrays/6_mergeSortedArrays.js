function mergeSorted(arr1, arr2) {
  //   Brute-force: TC- O(n+m) | SC- O(n+m)

  //   let output = [];
  //   let first = 0;
  //   let second = 0;

  //   while (first < arr1.length && second < arr2.length) {
  //     if (arr1[first] < arr2[second]) {
  //       output.push(arr1[first++]);
  //     } else output.push(arr2[second++]);
  //   }

  //   while (first < arr1.length) {
  //     output.push(arr1[first++]);
  //   }

  //   while (second < arr2.length) {
  //     output.push(arr2[second++]);
  //   }

  //   return output;

  // Better apprach:
  let left = arr1.length - 1;
  let right = 0;
  while(left >= 0 && right < arr2.length) {
    if(arr1[left] > arr2[right]){
        let temp = arr1[left];
        arr1[left] = arr2[right];
        arr2[right] = temp;
        left--;
        right++;
    } else {
        break;
    }
  }
  
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return {
    arr1,
    arr2
  }
}

let arr1 = [0, 1, 6, 10];
let arr2 = [2, 6, 8, 9, 12, 20];
console.log(mergeSorted(arr1, arr2)); // [0, 1, 2, 6, 6, 8, 9, 10, 12, 20]
