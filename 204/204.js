const countPrimes = n => {
	if (n <= 2) return 0;

	let primes = [2];

	for (let i = 3; i < n; i += 2) {
		let j = 0;
		for (; j < primes.length; ++j) {
			if (i % primes[j] === 0) break;
		}
		if (j === primes.length) primes.push(i);
	}

	return primes.length;
};

console.log(countPrimes(10)); // 4
console.log(countPrimes(2)); // 0
