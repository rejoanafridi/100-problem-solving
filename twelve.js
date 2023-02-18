function findAllShortestWords(str) {
	const words = str.trim().split(/\s+/);
	let shortestWords = [words[0]];
	for (let i = 1; i < words.length; i++) {
		const currentWord = words[i];
		if (currentWord.length < shortestWords[0].length) {
			shortestWords = [currentWord];
		} else if (currentWord.length === shortestWords[0].length) {
			shortestWords.push(currentWord);
		}
	}
	return shortestWords;
}

const myString = "The quick brown fox jumps over the lazy dog.";
const shortestWords = findAllShortestWords(myString);
console.log(shortestWords); // Output: ["The", "fox"]
