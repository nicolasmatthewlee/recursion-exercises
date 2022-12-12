// fibonacci recursion

function fibs(n) {
  if (n < 1) return;
  if (n < 2) return [0];

  let nums = [0, 1];
  for (let i = 2; i < n; i++) {
    nums.push(nums.slice(-1)[0] + nums.slice(-2, -1)[0]);
  }

  return nums;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n < 2) return [0];
  if (n < 3) return [0, 1];

  return fibsRec(n - 1).concat(
    fibsRec(n - 1).slice(-1)[0] + fibsRec(n - 1).slice(-2, -1)[0]
  );
}

console.log(fibsRec(8));

// merge sort

function mergeSort(nums) {
  if (nums.length < 2) return nums;

  let sortedLeft = mergeSort(nums.slice(0, nums.length / 2));
  let sortedRight = mergeSort(nums.slice(nums.length / 2));

  // merge
  let merge = [];
  while (sortedLeft.length > 0 && sortedRight.length > 0) {
    if (sortedLeft[0] < sortedRight[0]) {
      merge.push(sortedLeft.shift());
    } else {
      merge.push(sortedRight.shift());
    }
  }
  // add any leftover elements
  while (sortedLeft.length > 0) merge.push(sortedLeft.shift());
  while (sortedRight.length > 0) merge.push(sortedRight.shift());

  return merge;
}

console.log(mergeSort([5, 6, 1, 7, 8, 3, 4, 2, 8, 5, 9, 4, 2]));
