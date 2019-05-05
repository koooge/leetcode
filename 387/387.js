const firstUniqChar = s => {
  let blacklist = [];

  for (let i = 0; i < s.length; ++i) {
    const index = s.indexOf(s[i], i+1);
    if (index === -1 && !blacklist.includes(s[i])) return i;
    blacklist.push(s[i]);
  }

  return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('')); // -1
console.log(firstUniqChar('cc')); // -1
console.log(firstUniqChar('z')); // 0
console.log(firstUniqChar('aadadaad')); // -1
