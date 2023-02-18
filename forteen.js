// write a program factorial number
const num = 5
let factorial = 1;

if (num < 0) {
  console.log("Factorial is not defined for negative numbers.");
} else if (num === 0) {
  console.log("Factorial of 0 is 1.");
} else {
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${num} is ${factorial}`);
}
