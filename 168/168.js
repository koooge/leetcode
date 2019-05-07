const convertToTitle = n => {
	const atoz = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let title = [];

	while (n > 0) {
		const index = n % 26 === 0 ? 26 : n % 26;
		title.unshift(atoz[index - 1]);
		n = Math.floor((n - index) / 26);
	}

	return title.join('');
};

console.log(convertToTitle(1)); // 'A'
console.log(convertToTitle(26)); // 'Z'
console.log(convertToTitle(27)); // 'AA'
console.log(convertToTitle(28)); // 'AB'
console.log(convertToTitle(52)); // 'AZ'
console.log(convertToTitle(53)); // 'BA'
console.log(convertToTitle(701)); // 'ZY'
