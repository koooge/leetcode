const numMovesStones = (a, b, c) => {
	const [x, y, z] = [a, b, c].sort((a, b) => a > b);

	max = Math.max(z - y - 1 + y - x - 1, 0);
	let min;
	if (z - y === 1 && y - x === 1) {
		min = 0;
	} else if (z - y > 2 && y - x > 2) {
		min = 2;
	} else {
		min = 1;
	}

	return [min, max];
};

console.log(numMovesStones(1, 2, 5)); // [1, 2]
console.log(numMovesStones(4, 3, 2)); // [0, 0]
console.log(numMovesStones(3, 5, 1)); // [1, 2]
console.log(numMovesStones(7, 4, 1)); // [2, 4]
