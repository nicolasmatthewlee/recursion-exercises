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
