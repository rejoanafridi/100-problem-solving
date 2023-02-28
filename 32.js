function vowelConsonants(string) {
	let vowel = "aeiouAEIOU";
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (char.match(/[a-z]/i) && vowel.includes(char)) {
			count++;
		}
	}
	return count;
}

console.log(vowelConsonants("Enter a new String"));
