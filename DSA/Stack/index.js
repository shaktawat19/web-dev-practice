class Stack {
  constructor() {
    this.stack = [];
  }

  push(elem) {
    this.stack.push(elem);
  }

  isEmpty() {
    return this.size() === 0;
  }

  pop() {
    if (isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    if (isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  size() {
    return this.stack.length;
  }
}


const stack = new Stack();
stack.push(100);
console.log(stack.size());
