const letterCombinations = (digits) => {
  const buttons = [
    null, null,
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ];
  let combinations = [];

  for (let i = 0; i < digits.length; ++i) {
    const digit = digits[i];
    const button = buttons[Number(digits[i])];
    for (let j = 0; j < button.length; ++j) {
      const letter = button[j];
      for (let k = 0; k < Math.pow(3, digits.length - 1); k++) { /* how many a */
        const index = i !== 0 ? (i * 3 * k) + j : j * Math.pow(3, digits.length - 1) + k;
        combinations[index] = combinations[index] !== undefined ? combinations[index] + letter : letter;
      }
    }
  }

  return combinations;
};

console.log(letterCombinations('23')); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log(letterCombinations('2')); // ['a', 'b', 'c']
console.log(letterCombinations('6')); // ['m', 'n', 'o']
console.log(letterCombinations('8')); // ['t', 'u', 'v']
console.log(letterCombinations('234')); // ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
