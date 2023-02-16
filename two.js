const sumOfList = (list) => list.reduce((acc, val) => acc + val, 0);


const myList = [1, 2, 3, 4, 5];
const totalSum = sumOfList(myList);
console.log(totalSum);  // Output: 15
