const findLUSlength = (a, b) => {
	const long = a.length > b.length ? a : b;
	return a === b ? -1 : long.length;
};

console.log(findLUSlength('aba', 'cdc')); // 3
console.log(findLUSlength('aaa', 'aaa')); // -1
console.log(findLUSlength('aefawfawfawfaw', 'aefawfeawfwafwaef')); // 17
console.log(findLUSlength('aefeaf', '')); // 6
console.log(findLUSlength('aaa', 'a')); // 3
