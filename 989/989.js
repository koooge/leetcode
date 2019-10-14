const addToArrayForm = (A, K) => {
  for (let i = A.length - 1; K > 0; --i, K = Math.floor(K / 10)) {
    if (i >= 0) {
      A[i] += K % 10;
    } else {
      A.unshift(K % 10);
      ++i;
    }

    if (A[i] >= 10) {
      let j = i;
      while (j >= 0 && A[j] >= 10) {
        A[j] -= 10;
        if (j > 0) {
          A[j - 1] += 1;
        } else {
          A.unshift(1);
          ++i;
        }
        --j;
      }
    }
  }
  return A;
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1, 2, 3, 4]
console.log(addToArrayForm([2, 7, 4], 181)); // [4, 5, 5]
console.log(addToArrayForm([2, 1, 5], 806)); // [1, 0, 2, 1]
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1)); // [1,0,0,0,0,0,0,0,0,0,0]
console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516)); // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
console.log(addToArrayForm([0], 23)); // [2, 3]
console.log(addToArrayForm([6], 809)); // [8, 1, 5]