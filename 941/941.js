const validMountainArray = A => {
  if (A.length < 3) return false;
  if (A[0] >= A[1]) return false;

  let down = false;

  for (let i = 1, prev = A[0]; i < A.length; ++i) {
    if (down) {
      if (A[i] >= prev) return false;
    } else {
      if (A[i] < prev) down = true;
    }
    prev = A[i];
  }

  return down;
};

console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0])); // false
