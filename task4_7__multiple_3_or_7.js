// Task 4.7: check if a given positive number is a multiple of 3 or a multiple of 7
const prompt = require('prompt-sync')({
    sigint: true
});

const num = prompt('Please enter any number: ');
if (num < 1) {
    console.log("Your number isn't positive (i.e. bigger than 0)");
}else{
    if (num % 3 == 0 || num % 7 == 0) {
        console.log("Given number is a multiple of 3 or 7");
    } else {
        console.log("Given number isn't a multiple of 3 nor 7");
    }
}