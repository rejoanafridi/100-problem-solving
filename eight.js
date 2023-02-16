// Write a program to reverse a string

// const reverseString = (str) => {
// 	return str.split("").reverse().join("");
// };

// const string = "afridi hi how are you";
// const result = reverseString(string);
// console.log(result);


//  vanila js code
const reverseString = (str) => {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
};

const string = "afridi hi how are you";
const result = reverseString(string);
console.log(result);
