const reverse = (x) => {
  let arr = [];

  for (let num = x; num !== 0; num = Math.round(num / 10)) {
    arr.push(num % 10);
  }

  ans = 0;
  for (let i = arr.length - 1, digit = 1; i >= 0; digit *= 10, --i) {
    ans += arr[i] * digit;
  }

  return ans;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
