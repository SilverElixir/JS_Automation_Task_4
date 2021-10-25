const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }
);

console.log("\nHi there! I'm a simple calculator. I'll add up any 2 numbers, you like.");

var number1;
r1.question("nPlease enter 1st number. ", function (num1) {
    number1 = num1
    r1.close();
});  

console.log("Your number is " + number1)

// let num1 = process.openStdin();

// console.log("Good job! Now enter 2nd number: ");
// let num2 = process.openStdin();

// let sum = num1 + num2;
// console.log("So the sum of those two numbers is: " + sum);
// console.log("Bye!");