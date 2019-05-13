const countPrimes = n => {
	if (n <= 2) return 0;
		
	let nonPrimeNums = new Array(n).fill(false);
	let counter = 0;
		
	for (let i = 2; i < n; ++i) {
		if (nonPrimeNums[i]) continue;
		counter += 1;
					
		for (let j = 2; j < n; ++j) {
			let num = i * j;
			if (num >= n) break;
			nonPrimeNums[num] = true;
		} 
	}

	return counter;
};

console.log(countPrimes(10)); // 4
console.log(countPrimes(2)); // 0
console.log(countPrimes(499979)); // 41537
