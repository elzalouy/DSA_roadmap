// Please visit this site to understand  the Queue algorithm
// https://www.programiz.com/dsa/queue

//FIFO> first-in-first-out

class Queue {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = this.rear = -1;
  }
  /**
   * isEmpty
   *
   * check if the queue is empty or not.
   */
  isEmpty() {
    if ((this.front === this.rear) === -1) {
      return true;
    } else return false;
  }

  /**
   * isFull
   *
   * check if the queue is full
   */
  isFull() {
    if (this.rear === this.size - 1) return true;
    else return false;
  }

  /**
   * enQueue
   *
   * add a new value to the queue
   * @param {*} number number to be added to end of the queue
   */
  enQueue(number) {
    if (this.isFull()) return "Queue is full";
    this.front = this.front === -1 ? 0 : this.front;
    this.arr[++this.rear] = number;
    return this.arr;
  }

  /**
   * deQueue
   *
   * remove one element from the front of the queue
   */
  deQueue() {
    if (this.isEmpty()) return "Queue is empty";
    delete this.arr[this.rear--];
    if (this.front >= this.rear)
      this.arr[this.rear], (this.front = this.rear = -1);
    else delete this.arr[this.front++];
    return this.arr;
  }

  /**
   * peek
   *
   * Read the front value of the queue without removing it.
   */
  peek() {
    return this.arr[this.front];
  }
}
module.exports = Queue;
