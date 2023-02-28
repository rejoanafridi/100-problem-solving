//Write a program to find the number of uppercase letters in a string

const findUpperCase = (str) => {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (char === char.toUpperCase() && char !== char.toLowerCase()) {
			count++;
		}
	}
	return count;
};

console.log(findUpperCase("hey Bro HOW are You SSS" ));
