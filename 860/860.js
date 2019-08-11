const lemonadeChange = bills => {
  let changes = [0, 0, 0];

  for (let i = 0; i < bills.length; ++i) {
    if (bills[i] === 5) {
      ++changes[0];
    } else if (bills[i] === 10) {
      if (changes[0] === 0) return false;
      --changes[0];
      ++changes[1];
    } else if (bills[i] === 20) {
      if ((changes[1] === 0 && changes[0] < 3) || (changes[1] >= 1 && changes[0] === 0)) return false;
      if (changes[1] >= 1 && changes[0] >= 0) {
        --changes[0];
        --changes[1];
        ++changes[2];
      } else if (changes[1] === 0 && changes[0] >= 3) {
        changes[0] -= 3;
        ++changes[2];
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10])); // true
console.log(lemonadeChange([10, 10])); // false
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false