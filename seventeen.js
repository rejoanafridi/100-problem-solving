function binaryToDecimal(number) {
	if (/^[01]+$/.test(number)) {
		let decimal = 0;
		for (let i = 0; i < number.length; i++) {
			if (number[i] === "1") {
				decimal += Math.pow(2, number.length - i - 1);
			}
		}
		return decimal;
	} else {
		return "input is not binary number";
	}
}
console.log(binaryToDecimal('1101111')); // Output: 111

