let num = 113
let product = 1;

while (num > 0) {
  const digit = num % 10;
  product *= digit;
  num = Math.floor(num / 10);
}

console.log(`The product of the digits of the number is ${product}`);
