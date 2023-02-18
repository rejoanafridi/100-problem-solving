// Write a program to convert a number from decimal to binary

function decimalToBinary(decimal) {
	if (isNaN(decimal) || decimal < 0 || Math.floor(decimal !== decimal)) {
		return " Invalid Input";
	}

	let binary = "";

	while (decimal > 0) {
		binary = (decimal % 2) + binary;
		decimal = Math.floor(decimal / 2);
	}

	if (binary === "") {
		binary = "0";
	}
	return binary;
}

console.log(decimalToBinary(111))