// Quick sort

// Time Complexity O(n ^2)

// Algorithm of Quick sort pivot algorithm

// step 1 - choose the highest index value has pivot
// step 2 - take two variables to point left and right of the list excluding pivot
// step 3 - left points to the low index
// step 4 - right points to the right index
// step 5 - while value at left is less than pivot move right
// step 6 - while value at right is greater than pivot move left
// step 7 - if both step 5 and step 6 does not match swap left and right
// Step 8 − if left ≥ right, the point where they met is new pivot

// pseudocode

// function partitionFunc(left, right, pivot)
//    leftPointer = left
//    rightPointer = right - 1

//    while True do
//       while A[++leftPointer] < pivot do
//          //do-nothing
//       end while

//       while rightPointer > 0 && A[--rightPointer] > pivot do
//          //do-nothing
//       end while

//       if leftPointer >= rightPointer
//          break
//       else
//          swap leftPointer,rightPointer
//       end if

//    end while

//    swap leftPointer,right
//    return leftPointer

// end function
var A = [];
function partitionFunc(left, right, pivot) {
  let leftPointer = left,
    rightPointer = right - 1;
  while (true) {
    while (A[leftPointer] < pivot) {
      leftPointer += 1;
    }
    while (rightPointer > 0 && A[rightPointer] > pivot) {
      rightPointer -= 1;
    }
    if (leftPointer >= rightPointer) break;
    else {
      let temp = A[leftPointer];
      A[leftPointer] = A[rightPointer];
      A[rightPointer] = temp;
    }
  }
  let temp = A[leftPointer];
  A[leftPointer] = A[right];
  A[right] = temp;
  return leftPointer;
}

// Algoirthm of quick sort

// step 1 - Make the right-most index value pivot
// step 2 - partition the array using pivot value
// step 3 - quicksort left partition recursively
// step 4 - quicksort right partition recursively

// pseudocode

// procedure quickSort(left, right)
//    if right-left <= 0
//       return
//    else
//       pivot = A[right]
//       partition = partitionFunc(left, right, pivot)
//       quickSort(left,partition-1)
//       quickSort(partition+1,right)
//    end if

function quickSort(left, right) {
  if (right - left <= 0) return;
  else {
    let pivot = A[right];
    let partition = partitionFunc(left, right, pivot);
    quickSort(left, partition - 1);
    quickSort(partition + 1, right);
  }
}
// end procedure
// sort function
export default function sort(array) {
  A = array;
  quickSort(0, A.length - 1);
  return A;
}
