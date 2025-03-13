var groupAnagrams = function (strs) {
  const mp = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join();
    if (mp.has(sortedStr)) {
      mp.set(sortedStr, [...mp.get(sortedStr), str]);
    } else {
      mp.set(sortedStr, [str]);
    }
  }
  return Array.from(mp.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
