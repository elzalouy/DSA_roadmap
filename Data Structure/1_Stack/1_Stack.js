// Please read this doc first then go ti understand the code.
//https://www.programiz.com/dsa/stack

// LIFO
module.exports = class Stack {
  constructor(size = 2) {
    this.arr = [];
    this.top = -1;
    this.capacity = size;
  }

  /** isFull()
   *
   * check if the stack is full according to its size.
   */
  isFull() {
    return this.capacity - 1 === this.top;
  }

  /**
   * isEmpty()
   *
   * check the stack is empty or not.
   */
  isEmpty() {
    return this.top === -1;
  }

  /**
   * push()
   *
   * add new value to the top of the stack
   * @param {number} number
   */
  push(number) {
    if (this.isFull()) {
      return { error: "Stack is full." };
    }
    return (this.arr[++this.top] = number);
  }

  /**
   * pop()
   *
   * remove a the last value in the stack
   */
  pop() {
    if (this.isEmpty()) {
      return { error: "Stack is empty" };
    }
    delete this.arr[this.top--];
  }
  /**
   * size()
   *
   * get the current size of the stack.
   */
  size() {
    return top + 1;
  }
};
