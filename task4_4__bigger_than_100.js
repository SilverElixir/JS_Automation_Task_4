// Task 4.4:  check a given integer is bigger than 100

const prompt = require('prompt-sync')({sigint: true});

const num = prompt('Please enter any number: ');
if(num / 100 >= 1){
    console.log("Given number is bigger than or equal 100");
}else{
console.log("Given number is less than 100");
}