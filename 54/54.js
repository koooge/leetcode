const spiralOrder = matrix => {
	if (matrix.length === 0 || matrix[0].length === 0) return [];

	const outer = [];
	for (let i = 0; i < matrix[0].length; ++i) outer.push(matrix[0][i]);
	for (let i = 1; i < matrix.length - 1; ++i) outer.push(matrix[i][matrix[0].length - 1]);
	if (matrix.length >= 2) {
		for (let i = matrix[0].length - 1; i >= 0; --i) outer.push(matrix[matrix.length - 1][i]);
	}
	if (matrix[0].length >= 2) {
		for (let i = matrix.length - 2; i > 0; --i) outer.push(matrix[i][0]);
	}

	const innerMatrix = matrix.map(row => row.slice(1, matrix[0].length - 1)).slice(1, matrix.length - 1);
	const inner = spiralOrder(innerMatrix);

	return [...outer, ...inner];
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6 ,9, 8, 7, 4. 5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
console.log(spiralOrder([[7], [9], [6]])); // [7, 9, 6]
console.log(spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])); // [1,2,3,4,5,6,7,8,9,10]
