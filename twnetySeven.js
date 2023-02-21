const findFirstNOddNumbers = (number) => {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += 1 * i;
	}
	return sum;
};

console.log(findFirstNEvenNumbers(5));
