const arrangeCoins = n => {
  if (n <= 1) return n;

  let ans = n;

  let i = 1;
  while (ans >= 0) {
    ans -= i++;
  }

  return i - 2;
};

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(1)); // 1
console.log(arrangeCoins(2)); // 1
console.log(arrangeCoins(0)); // 0
console.log(arrangeCoins(3)); // 2
