function getPivot(arr, startIndex, endIndex) {

    let index = startIndex; // index courant est l'index de depart 
    // begin iterate and swap

    for (let i = index; i < endIndex; i++) {
      if (arr[i] < arr[endIndex]) {
          let temp = arr[i];
          arr[i] = arr[index];
          arr[index] = temp;
        index += 1;
      }
    }
    // move `pivotVal` to the middle index and return middle index
    temp = arr[index]
    arr[index] = arr[endIndex]
    arr[endIndex] = temp

    return index;
  }
  
  function quickSort(arr, startIndex, endIndex) {
    // Base case or terminating case
    if (startIndex >= endIndex) {
         // si arr = []
      return;
    }
  
    // Return pivot
    let pivot = getPivot(arr, startIndex, endIndex);
  
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, startIndex, pivot - 1);
    quickSort(arr, pivot + 1, endIndex);
  }
  
  let arr = [-2, 4, 6, 3, 7, 2];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr); // [-2, 2, 3, 4, 6, 7]