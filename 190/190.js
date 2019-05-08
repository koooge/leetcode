const reverseBits = n => {
	const bin = n.toString(2);
	const reverse = bin.split('').reverse().join('').padEnd(32, '0');
	return Number.parseInt(reverse, 2);
};

console.log(reverseBits(43261596)); // 964176192
console.log(reverseBits(4294967293)); // 3221225471
