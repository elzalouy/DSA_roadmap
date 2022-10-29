# Quick Sort

Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value

Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.

## how Quick sort works
**Quick Sort has two functions**

* first one is the pivot qucik sort function. This one will seperate the array into  two other subarrays, and create two variables in each one of them. the left side array will have a loop and check if its variable is ***`less than pivot or not`*** until it find a value is greater than pivot and will exit the loop. same with the right side array but with a condition `greater than` until it find a value `lest than pivot`. take the two founded values and swap them. if the two variables pointers on the same index and value, then break the loop and change pivot index with the current right array's variable index. 
* second one is the recursion func, this function will repeat itself with calling the first function as long as left side array's variable is less than the right's array variable.
 