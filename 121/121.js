const maxProfit = prices => {
	let minPrice = prices[0];
	let max = 0;

	for (let i = 1; i < prices.length; ++i) {
		const profit = prices[i] - minPrice;
		if (prices[i] < minPrice) minPrice = prices[i];
		if (profit > max) max = profit;
	}

	return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
