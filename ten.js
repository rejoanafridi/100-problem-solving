// Write a program to count the number of words in a string

const countWords = (str) => {
	let word = str.trim().split(/\s+/);
	return word.length;
};
const myString = "The  brown fox jumps over the lazy dog.";
const numWords = countWords(myString);
console.log(numWords); // Output: 9
