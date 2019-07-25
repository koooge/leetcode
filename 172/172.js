const trailingZeroes = n => {
	let ans = 0;

	for (let i = n; i > 0; i = Math.floor(i / 5)) {
		ans += Math.floor(i / 5);
	}

	return ans;
};

console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(30)); // 7
