class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addToLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  removeLast() {
    if (this.head === null) {
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.next.next === null) {
        temp.next = null;
        break;
      }
      temp = temp.next;
    }
  }

  size() {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      temp = temp.next;
      count++;
    }
    return count;
  }

  addAtIndex(i, data) {
    if (i < 0 || i > this.size()) {
      console.error("invalid index");
      return;
    }

    const newNode = new Node(data);
    if (i === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (i > 0) {
      temp = temp.next;
      i--;
    }

    newNode.next = temp.next;
    temp.next = newNode;
  }

  removeAtIndex(i) {
    if (i < 0 || i > this.size()) {
      console.error("invalid index");
      return;
    }

    if (i === 0) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    while (i > 1) {
      temp = temp.next;
      i--;
    }

    temp.next = temp.next.next;
  }

  removeTop() {
    if (this.head === null) return;
    this.head = this.head.next;
  }

  print(){
    let current = this.head;
    while(current !== null){
        console.log(current.next);
        current = current.next;
    }
  }
}

const linkedList = new LinkedList();
