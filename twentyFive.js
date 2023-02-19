// Write a program to find the sum of the first n natural numbers

function naturalNumber(number) {
	let sum = 0;
	for (let i = 0; i <= number; i++) {
		sum += i;
	}
	return sum;
}


console.log(naturalNumber(5))