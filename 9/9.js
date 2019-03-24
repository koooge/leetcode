const isPalindrome = (x) => {
  if (x < 0) return false;

  const arr = String(x).split('');

  for (let i = 0; i <= arr.length / 2 - 1; ++i) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
