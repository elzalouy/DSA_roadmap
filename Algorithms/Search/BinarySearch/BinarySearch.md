## Data Structure and Algorithms Binary Search

#### Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.

### **How Binary Search works**
**We need to search the location of value 31 using binary search**
![alt text](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_0.jpg "Array from Tutorials point images")

* Declare these variables ```low=Array[0], high=Array[lastItem]```

* Get the half of the array using this formula 
 ```mid = floor(low + (high - low) / 2)```
![alt text](
<https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_1.jpg>)

* Is the value at mid equals the needed value  ```mid === 31 ?``` **No**

* Is the value at mid is greate than the needed value ```mid > 31 ? ``` **No** 

* Is the value at mid is less than the needed value ```mid <``` **Yes** , So the value we are searching for is in the upper portion of the array. set low   ```low = mid + 1``` and reset the mid with equation in step 2 ```mid = floor(low + (high - low)/2)```
![alt text](
<https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_2.jpg>)
![alt text](
<https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_3.jpg>)

* if the value at mid is greater than the value we need , so set  ```high = mid - 1```
![alt text](
<https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_4.jpg>)
* If the value of mid equals the needed value then **Exit loop**

### **Pseudocode**

```javascript
Procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set lowerBound = 1
   Set upperBound = n 

   while x not found
      if upperBound < lowerBound 
         EXIT: x does not exists.
   
      set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
      
      if A[midPoint] < x
         set lowerBound = midPoint + 1
         
      if A[midPoint] > x
         set upperBound = midPoint - 1 

      if A[midPoint] = x 
         EXIT: x found at location midPoint
   end while
   
end procedure
```
