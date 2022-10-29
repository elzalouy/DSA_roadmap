const QuickSort = require("./Algorithms/Sort/QuickSort/QuickSort.js");
const BinarySearch = require("./Algorithms/Search/BinarySearch/BinarySearh.js");
const Stack = require("./Data Structure/DS 1/1_Stack.js");

const stack = () => {
  let stack = new Stack(5);
  // check is empty
  // push
  stack.push(2);
  console.log("push 2", stack);
  stack.push(3);
  console.log("push 3", stack);
  stack.push(4);
  console.log("push 4", stack);
  stack.push(5);
  console.log("push 5", stack);
  stack.push(6);
  console.log("push 6", stack);
  // check is full
  console.log("check is full", stack.isFull());
  // pop
  stack.pop();
  console.log("pop 6", stack);
  stack.pop();
  console.log("pop 5", stack);
  stack.pop();
  console.log("pop 4", stack);
  stack.pop();
  console.log("pop 3", stack);
  stack.pop();
  console.log("pop 2", stack);
  //check is empty
  console.log("check is empty", stack.isEmpty());
};

function app() {
  stack();
}
app();
