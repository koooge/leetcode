const hasGroupsSizeX = deck => {
	let partitions = [];

	deck.forEach(i => {
		partitions[i] = partitions[i] ? ++partitions[i] : 1;
	});
	partitions = partitions.filter(i => i);

  let res = 0;
	for (let num of partitions) {
		res = gcd(res, num);
	}

	return res > 1;
};

const gcd = (a, b) => {
	if (b === 0) return a;
	return gcd(b, a % b);
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // false
console.log(hasGroupsSizeX([1])); // false
console.log(hasGroupsSizeX([1, 1])); // true
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])); // true
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2])); // true
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])); // true
console.log(hasGroupsSizeX([0, 1, 1, 1, 2, 2, 3, 3, 4, 5])); // false
console.log(hasGroupsSizeX([0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3])); // true
