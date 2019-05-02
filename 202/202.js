const isHappy = n => {
  while (n >= 10) {
    let num = String(n).split('');
    
    n = 0;
    num.map(el => {
      n += Math.pow(Number(el), 2);
    });
  }

  return n === 1 || n === 7;
};

console.log(isHappy(19)); // true
