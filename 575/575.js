const distributeCandies = candies => {
	return Math.min(new Set(candies).size, candies.length / 2);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // 3
console.log(distributeCandies([1, 1, 2, 3])); // 2
console.log(distributeCandies([1000, 1, 1, 1])); // 2
console.log(distributeCandies([0, 0, 14, 0, 10, 0, 0, 0])); // 3
