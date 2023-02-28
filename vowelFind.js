// Write a program to find the number of vowels in a string

function findVowels(str) {
	let count = 0;
	const vowel = "aeiouAEIOU";
	for (let i = 0; i < str.length; i++) {
		if (vowel.includes(str[i])) {
			count++;
		}
	}
	return count;
}
// findVowels("Hello");
console.log("Number of vowels", findVowels("Hello rejoan afridi"));
