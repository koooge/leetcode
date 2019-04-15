const generate = numRows => {
	if (numRows === 0) return [];
	let ans = [[1]];

	for (let i = 1; i < numRows; ++i) {
		let row = [1];
		for (let j = 1; j <= i; ++j) {
			const left = ans[i-1][j-1];
			const right = j === i ? 0 : ans[i-1][j];
			row.push(left+right);
		}
		ans.push(row);
	};

	return ans;
};

console.log(generate(5)); // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
