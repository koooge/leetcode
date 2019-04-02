const climbStairs = n => {
	let stairs = 0;

	if (n >= 4) {
		stairs += climbStairs(Math.floor(n/2)) * climbStairs(n - Math.floor(n/2));
		stairs += climbStairs(Math.floor(n/2) - 1) * climbStairs(n - Math.floor(n/2) - 1);
	} else if (n === 3) {
		return 3;
	} else if (n === 2) {
		return 2;
	} else if (n === 1) {
		return 1;
	}

	return stairs;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(45)); // 1836311903
