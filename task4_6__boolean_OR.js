// Task 4.6:  check two given numbers and print true if one of the number is 50
// or if their sum is 50


const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('Please enter 1st number: ');
const num2 = prompt('Please enter 2nd number: ');
if(num1 == 50 || num2 == 50 || num1+num2 == 50){
    console.log("One of the given numbers is 50 OR sum of those numbers is 50");
}else{
console.log("None of the conditions has been satisfied :( ");
}