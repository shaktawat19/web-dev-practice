let str = "Hi there its Harsh";

function reverseWords(str) {
  // Approach 1:
  let result = str.split(' ').reverse().join(' ');
  return result;

}

console.log(reverseWords(str));
