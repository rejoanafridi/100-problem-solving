// Write a program to sort a list of numbers in ascending order

// const ascendingList = (list) => {
// 	for (let i = 0; i < list.length; i++) {
// 		for (let j = 0; j < list.length; j++) {
// 			if (list[i] < list[j]) {
// 				let temp = list[i];
// 				list[i] = list[j];
// 				list[j] = temp;
// 			}
// 		}
// 	}
// 	return list;
// };

// let array = [2, 4, 7, 1, 3, 13, 9];
// let res = ascendingList(array);
// console.log(res);

// es6 solution

const descendingList = (list) => {
	list.sort((a, b) => a - b);
     return list
};
let data = [2, 4, 7, 1, 3, 13, 9]
let result = descendingList(data);
console.log(result);
