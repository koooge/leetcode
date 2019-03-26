const INT_MIN = -1 * Math.pow(2, 31);
const INT_MAX = Math.pow(2, 31) - 1;

const myAtoi = (str) => {
  const s = str.replace(/^\s+/, '').split(' ')[0];
  const firstNumber = Number(s.match(/^[0-9+-][0-9]+/));

  if (Number.isNaN(firstNumber)) {
    return 0;
  } else if (firstNumber < INT_MIN) {
    return INT_MIN;
  } else if (firstNumber > INT_MAX) {
    return INT_MAX;
  }

  return firstNumber;
};

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('  -0012a42')); // -12
console.log(myAtoi('+1')); // 1
console.log(myAtoi('-5-')); // -5
console.log(myAtoi('3.14159')); // 9
