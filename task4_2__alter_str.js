// Task 4.2: create a new string adding “Test_" in front of a given string
const prompt = require('prompt-sync')({sigint: true});

//const readline = require("readline-sync");
//let stdin = process.openStdin(); 

const str = prompt('Please enter any string: ');
const updStr = `Test_` + `${str}`
console.log(updStr);
