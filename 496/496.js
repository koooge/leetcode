const nextGreaterElement = (nums1, num2) => {
	let results = [];

	nums1.forEach(el => {
		const index = num2.indexOf(el);
		let result = -1;
		for (let i = index; i < num2.length; ++i) {
			if (num2[i] > el) {
				result = num2[i];
				break;
			}
		}
		results.push(result);
	});

	return results;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3, -1]
