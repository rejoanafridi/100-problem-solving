const sum_of_number = (list) => {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		sum += list[i];
	}
	return sum;
};

const list = [12, 34, 54, 5, 46, 56, 567];
console.log(sum_of_number(list));
