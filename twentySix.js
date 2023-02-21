const findFirstNEvenNumbers = (number) => {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += 2 * i;
	}
	return sum;
};

console.log(findFirstNEvenNumbers(5));
