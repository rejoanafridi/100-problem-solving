// Write a program to find the longest word in a string

const longestWord = (str) => {
	let longestWord = "";
	let word = str.trim().split(/\s+/);
	for (let i = 0; i < word.length; i++) {
		if (word[i].length > longestWord.length) {
			longestWord = word[i];
		}
	}
	return longestWord;
};

const myString = "The  brown fox jumps over the lazy dog.";
const res = longestWord(myString);
console.log(res);
