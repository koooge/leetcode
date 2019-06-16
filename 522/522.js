const findLUSlength = strs => {
	let res = -1;

	for (let i = 0; i < strs.length; ++i) {
		let j = 0;
		for (j = 0; j < strs.length; ++j) {
			if (j === i) continue;
			if (isSubsequence(strs[i], strs[j])) break;
		}
		if (j === strs.length) res = Math.max(res, strs[i].length);
	}

	return res;
};

const isSubsequence = (x, y) => {
	let j = 0;
	for (let i = 0; i < y.length && j < x.length; ++i) {
		if (x[j] === y[i]) ++j;
	}
	return j === x.length;
};

console.log(findLUSlength(['aba', 'cdc', 'eae'])); // 3
console.log(findLUSlength(['aaa', 'acb'])); // 3
console.log(findLUSlength(['aaa', 'aaa', 'aa'])); // -1
console.log(findLUSlength(['aabbcc', 'aabbcc', 'cb'])); // 2
console.log(findLUSlength(['aabbcc', 'aabbcc', 'cb', 'abc'])); // 2
console.log(findLUSlength(['aabbcc', 'aabbcc', 'c', 'e', 'aabbcd'])); // 6
