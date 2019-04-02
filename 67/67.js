const addBinary = (a, b) => {
	if (a.length < b.length) [a, b] = [b, a]; 

	let ans = [];

	for (let i = 0; i < a.length; ++i) {
		const indexA = a.length - 1 - i;
		const indexB = b.length - 1 - i;
		if (i < b.length) {
			ans.unshift(Number(a[indexA]) + Number(b[indexB]));
		} else {
			ans.unshift(Number(a[indexA]));
		}
	}

	for (let i = ans.length - 1; i >= 0; --i) {
		if (ans[i] >= 2) {
			ans[i] %= 2;
			if (i !== 0) {
				ans[i - 1] += 1;
			} else {
				ans.unshift(1);
			}
		}
	}

	return ans.join('');
};

console.log(addBinary('11', '1')); // '100'
console.log(addBinary('1010', '1011')); // '10101'
