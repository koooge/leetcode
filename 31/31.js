const nextPermutation = nums => {
  let n = nums.length; 
  let i;

  for (i = n - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) break;
  }
  if (i < 0) {
    nums.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  } else {
    let j;
    for (j = n - 1; j > i; --j) {
      if (nums[j] > nums[i]) break;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
    for (let k = i + 1; k < n; ++k) {
      for (let l = n - 1; l > k; --l) {
        if (nums[l] < nums[k]) [nums[l], nums[k]] = [nums[k], nums[l]];
      }
    }
  }
};

let a = [1, 2, 3];
nextPermutation(a);
console.log(a); // [1, 3, 2]

let b = [3, 2, 1];
nextPermutation(b);
console.log(b); // [1, 2, 3]

let c = [1, 1, 5];
nextPermutation(c);
console.log(c); // [1, 5, 1]

let d = [1, 3, 2];
nextPermutation(d);
console.log(d); // [2, 1, 3]

let e = [2, 3, 1];
nextPermutation(e);
console.log(e); // [3, 1, 2]

let f = [5, 4, 7, 5, 3, 2];
nextPermutation(f);
console.log(f); // [5, 5, 2, 3, 4, 7]
