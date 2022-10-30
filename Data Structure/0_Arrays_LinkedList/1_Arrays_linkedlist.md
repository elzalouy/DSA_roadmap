## Arrays and linked lists

#### With arrays items should hold a memory that fit the array size and if you are out of space you need to move to a new spot in memory every time.

![alt text]( "Grokking algorithms book, ch2")

#### With linked lists, your items can be anywhere in memory. Each item stores the address of the next item. A bunch of random memory addresses are linked together.

## Arrays

- Reading will take O(1) to get the value, let's say we have an array of [1,2,3,4,5,6] to get the value of 6 you will call the index 5. So 0 index will have the first value and the 5th index will have the last value which equals 6.
- Inserting an element to a specific index in the array, you have to shift all the rest of the elements down to get the index you need.
