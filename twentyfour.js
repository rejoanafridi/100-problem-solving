// Write a program to check if a number is a multiple of another number

function isMultipleOf(number, multiple) {
	if (number % multiple === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isMultipleOf(15, 3)); // Outputs: true
console.log(isMultipleOf(20, 3));