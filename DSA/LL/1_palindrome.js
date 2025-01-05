function isPalindrome(head) {
  let curr = head;
  let str = "";
  while (curr !== null) {
    str += curr.data;
    curr = curr.next;
  }

  return str === str.split("").reverse().join("");
}

console.log(isPalindrome());
