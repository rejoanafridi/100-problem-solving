// Write a program to find the GCD of two numbers

function gcd(a, b) {
	if (a < b) {
		[a, b] = [b, a];
	}
	while (b !== 0) {
		const remainder = a % b;
		[a, b] = [b, remainder];
	}
	return a;
}

const a = 12;
const b = 18;
console.log(gcd(a, b)); 