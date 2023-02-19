// Write a program to find the LCM of two numbers

function lcm(a, b) {
	const gcd = (x, y) => {
		return y === 0 ? x : gcd(y, x % y);
	};
	return (a * b) / gcd(a, b);
}
// Example usage
const a = 12;
const b = 18;
console.log(lcm(a, b));  
