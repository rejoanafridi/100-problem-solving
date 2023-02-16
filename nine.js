// Write a program to check if a string is a palindrome

const palindromeStr = (str) => {
	let check_palindrome = str.split("").reverse().join("");
	if (check_palindrome === str) {
		return "This is plain palindrome";
	} else {
		return "false not palindrome";
	}
};

const str = "levela";

const result = palindromeStr(str);


console.log(result)