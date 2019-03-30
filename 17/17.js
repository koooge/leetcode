const letterCombinations = (digits) => {
  const buttons = {
    "2": ['a', 'b', 'c'],
    "3": ['d', 'e', 'f'],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z'],
  };

  let combinations = buttons[digits[0]] || [];
  digits = digits.slice(1);

  digits.split('').forEach(digit => {
    const button = buttons[digit];
    let t = [];
    buttons[digit].forEach(letter => {
      t = t.concat(combinations.map(item => item + letter));
    });
    combinations = t;
  });

  return combinations;
};

console.log(letterCombinations('23')); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log(letterCombinations('2')); // ['a', 'b', 'c']
console.log(letterCombinations('6')); // ['m', 'n', 'o']
console.log(letterCombinations('8')); // ['t', 'u', 'v']
console.log(letterCombinations('234')); // ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
console.log(letterCombinations('')); // []
