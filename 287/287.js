const solution = isBadVersion => {
  return function(n) {
    let start = 1, end = n;
    while(start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1
      }
    }
    return start;
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
