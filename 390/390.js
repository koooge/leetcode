const lastRemaining = (n) => {
  let toRight = true;
  let list = [...Array(n)].map((_, i) => i + 1);

  while (list.length !== 1) {
    let next = [];
    if (toRight) {
      for (let i = 1; i < list.length; i += 2) next.push(list[i]);
    } else {
      for (let i = list.length - 2; i >= 0; i -= 2) next.unshift(list[i]);
    }
    toRight = !toRight;
    list = next;
  }

  return list[0];
};

console.log(lastRemaining(9)); // 6
