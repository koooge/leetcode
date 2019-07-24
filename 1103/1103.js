const distributeCandies = (candies, num_people) => {
	const ans = new Array(num_people).fill(0);
	let i = 1;
	let j = 0;

	while (candies > 0) {
		ans[j] += candies >= i ? i : candies;
		candies -= i;
		++i;
		j = j === num_people - 1 ? 0 : ++j;
	}

	return ans;
};

console.log(distributeCandies(7, 4)); // [1, 2, 3, 1]
console.log(distributeCandies(10, 3)); // [5, 2, 3]
