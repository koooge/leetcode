const lastRemaining = (n) => {
  let toRight = true;
  let remaining = n;
  let step = 1;
  let head = 1;

  while (remaining > 1) {
    if (toRight || remaining % 2 === 1) head += step;
    step *= 2;
    remaining = Math.floor(remaining / 2);
    toRight = !toRight;
  }

  return head;
};

console.log(lastRemaining(9)); // 6
console.log(lastRemaining(1)); // 1
console.log(lastRemaining(5)); // 2
