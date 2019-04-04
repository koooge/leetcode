const divide = (dividend, divisor) => {
  let negative = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) negative = -1;

  let div = Math.abs(dividend);
  let d = Math.abs(divisor);

  let ans = 0;

  while (div >= d) {
    let count = 1;
    let base = d;
    while (base <= (div >> 1)) {
      base <<= 1;
      count <<= 1;
    }

    div -= base;
    ans += count;
  }

  ans = negative === -1 ? -ans : ans;

  if (ans > Math.pow(2, 31) - 1) ans = Math.pow(2, 31) - 1;
  if (ans < -Math.pow(2, 31)) ans = -Math.pow(2, 31);

  return ans;
};

console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(-2147483648, -1)); // 2147483647
console.log(divide(-2147483648, 1)); // -2147483648
console.log(divide(1, 1)); // 1
console.log(divide(-2147483648, -2147483648)); // 1
