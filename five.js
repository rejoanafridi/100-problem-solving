// Write a program to find the median of a list of numbers

const medianOfList = (list) => {
	const sortedList = list.sort((a, b) => a - b);
	const listLen = sortedList.length;
	const mid = Math.floor(listLen / 2);
     console.log(mid)
	return listLen % 2 === 0
		? sortedList[mid - 1] + sortedList([mid]) / 2
		: sortedList[mid];
};



const myList = [1, 3, 5, 7, 9, 11 , 15];
const median = medianOfList(myList);
console.log(median);  // Output: 5
