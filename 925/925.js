const isLongPressedName = (name, typed) => {
  let j = 0;
  for (let i = 0; i < name.length; ++i) {
    while (name[i] !== typed[j]) {
      ++j;
      if (j >= typed.length) return false;
    }
    ++j;
  }

  return true;
};

console.log(isLongPressedName('alex', 'aaleex')); // true
console.log(isLongPressedName('saeed', 'ssaaedd')); // false
console.log(isLongPressedName('leelee', 'lleeelee')); // true
console.log(isLongPressedName('laiden', 'laiden')); // true
console.log(isLongPressedName('pyplrz', 'ppyypllr')); // false
