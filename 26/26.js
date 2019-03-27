const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1; ++i) {
    let j = 1;
    while (nums[i] === nums[i+j]) ++j;
    nums.splice(i+1, j-1);
  }
};

const a = [1, 1, 2];
removeDuplicates(a);
console.log(a); // [1, 2]

const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(b);
console.log(b); // [0, 1, 2, 3, 4]
