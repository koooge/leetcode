const findRadius = (houses, heaters) => {
	let maxRadius = 0;

	for (let i = 0; i < houses.length; ++i) {
		let radius = Math.abs(houses[i] - heaters[0]);
		for (let j = 1; j < heaters.length; ++j) {
			const distance =  houses[i] >= heaters[j] ? houses[i] - heaters[j] : heaters[j] - houses[i];
			if (distance < radius) radius = distance;
		}
		if (radius > maxRadius) maxRadius = radius;
	}

	return maxRadius;
};

console.log(findRadius([1, 2, 3], [2])); // 1
console.log(findRadius([1, 2, 3, 4], [1, 4])); // 1
console.log(findRadius([1, 5], [2])); // 3
