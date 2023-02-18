const prime = (number) => {
     // check the number is less than 2 not a prime
	if (number < 2) {
		return false;
	}
     // check if the number is 2 is a prime number
	if (number === 2) {
		return true;
	}
     // check the number is even 
	if (number % 2 === 0) {
		return false;
	}

	const sqrt = Math.floor(Math.sqrt(number));
	for (let i = 3; i <= sqrt; i += 2) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
};

console.log(prime(15))
