function reverseList(head) {
  let prev = null;
  let current = head;
  let nextNode = null;

  while (current !== null) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

reverseList();
