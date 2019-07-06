const findNthDigit = n => {
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += (n - 1) / len;
  const s = String(start);

  return s[(n - 1) % len];
};

console.log(findNthDigit(3)); // 3
console.log(findNthDigit(11)); // 0
console.log(findNthDigit(1)); // 1
console.log(findNthDigit(10)); // 1
console.log(findNthDigit(12)); // 1
console.log(findNthDigit(13)); // 1
console.log(findNthDigit(15)); // 2
console.log(findNthDigit(16)); // 1
console.log(findNthDigit(17)); // 3
console.log(findNthDigit(18)); // 1
console.log(findNthDigit(19)); // 4
console.log(findNthDigit(20)); // 1
console.log(findNthDigit(21)); // 5
console.log(findNthDigit(22)); // 1
console.log(findNthDigit(23)); // 6
