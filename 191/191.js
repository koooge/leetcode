const hammingWeight = n => {
	return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b));
};

console.log(hammingWeight(parseInt('00000000000000000000000000001011', 2))); // 3
console.log(hammingWeight(parseInt('00000000000000000000000010000000', 2))); // 1
console.log(hammingWeight(parseInt('11111111111111111111111111111101', 2))); // 31
