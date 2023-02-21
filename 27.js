let n = 5
let sum = 0;

for (let i = 1; i <= 2*n; i += 2) {
  sum += i;
}

console.log("The sum of first " + n + " odd numbers is " + sum);
