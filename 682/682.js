const calPoints = ops => {
  let sum = 0;

  for (let i = 0; i < ops.length; ++i) {
    if (ops[i] === '+') {
      ops[i] = ops[i - 2] + ops[i - 1];
      sum += ops[i];
    } else if (ops[i] === 'D') {
      ops[i] = ops[i - 1] * 2;
      sum += ops[i];
    } else if (ops[i] === 'C') {
      sum -= ops[i - 1];
      ops.splice(i - 1, 2);
      i -= 2;
    } else { 
      ops[i] = Number(ops[i]);
      sum += ops[i];
    }
  }

  return sum;
};

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
