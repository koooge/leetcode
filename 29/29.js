const divide = (dividend, divisor) => {
  if (dividend < -Math.pow(2, 31)) dividend = -Math.pow(2, 31);
  if (dividend > Math.pow(2, 31) - 1) dividend = Math.pow(2, 31) - 1;

  let negative = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) negative = -1;

  if (negative === 1 && dividend === -Math.pow(2, 31)) dividend = Math.pow(2, 31) - 1;

  let div = Math.abs(dividend);
  let d = Math.abs(divisor);

  let ans = 0;

  while (div >= d) {
    div -= d;
    ++ans;
  }

  return negative === -1 ? -ans : ans;
};

console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(-2147483648, -1)); // 2147483647
console.log(divide(-2147483648, 1)); // -2147483648
console.log(divide(1, 1)); // 1
