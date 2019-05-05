const solution = isBadVersion => {
  return function(n) {
    for (let i = n - 1; i > 0; --i) {
      if (!isBadVersion(i)) return i+1;
    }
    return 1;
  }
};

const isBadVersionA = version => {
  switch (version) {
    case 3: return false;
    case 4: return true;
    case 5: return true;
    default: return true;
  }
};

console.log(solution(isBadVersionA)(5)); // 4

const isBadVersionB = version => {
  switch (version) {
    case 1: return true;
    case 3: return true;
    default: return true;
  }
};

console.log(solution(isBadVersionB)(3)); // 1
