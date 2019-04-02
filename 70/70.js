const step = n => {
	let stairs = 0;

	if (n === 0 || n === 1) {
		return 1;
	} else if (n >= 2) {
		stairs += step(n - 1);
		stairs += step(n - 2);
	}

	return stairs;
};

const climbStairs = n => {
	let stairs = 0;

	stairs += step(n - 1);
	stairs += step(n - 2);

	return stairs;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
