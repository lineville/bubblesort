let sorter = {};
sorter.bubbleSort = function bubbleSort(arr) {
  let len = arr.length;
  // for each element loop over it
  for (let sortedElements = 0; sortedElements < len; sortedElements++) {
    // loop through the unsorted section of the array [1 ... len - i]
    for (let j = 1; j < len - sortedElements; j++) {
      // so long as the previous index is valid and and previous is greater
      // then swap.
      let val = arr[j];
      let prev = arr[j - 1];
      if (prev > val) {
        arr = sorter.swap(arr, j - 1, j);
      }
    }
  }
  return arr;
};

sorter.swap = function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};
