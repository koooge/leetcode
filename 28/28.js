const strStr = (haystack, needle) => {
  if (needle === '') return 0;

  for (let i = 0; i < haystack.length; ++i) {
    for (let j = 0; j < needle.length; ++j) {
      if (haystack[i+j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('aaaaa', '')); // 0
