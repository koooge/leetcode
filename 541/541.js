const reverseStr = (s, k) => {
	const arr = s.split('');

	for (let i = 0; i < s.length; i += 2 * k) {
		const reverse = arr.splice(i, k).reverse();
		arr.splice(i, 0, ...reverse);
	}

	return arr.join('');
};

console.log(reverseStr('abcdefg', 2)); // 'bacdfeg'
