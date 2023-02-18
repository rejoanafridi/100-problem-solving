// Write a program to remove all duplicates from a list

const removeDuplicates = (list) => {
	let uniqueArray = [...new Set(list)];
	return uniqueArray;
};

const array = [1, 3, 4, 5, 5, 6, 7, 7, 7, 11];

let res = removeDuplicates(array);

console.log(res);
