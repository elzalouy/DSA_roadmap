import BinarySearch from "./Algorithms/Search/BinarySearch/BinarySearh.js";
import QuickSort from "./Algorithms/Sort/QuickSort.js";
export default function app() {
  console.log("Quick Sort for ", [2, 1, 5, 6, 24, 3]);
  let sortedArray = QuickSort([2, 1, 5, 6, 24, 3]);
  console.log("Quick Sort result", sortedArray);
  let index = BinarySearch(sortedArray, 5);
  console.log(
    sortedArray,
    "find index of 5 after quick sort using Binary search",
    index
  );
}
app();
