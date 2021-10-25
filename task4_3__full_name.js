// Task 4.3: combine and print your first, last name and age
const prompt = require('prompt-sync')({sigint: true});

const firstName = prompt('Please enter your first name: ');
const lastName = prompt('Now enter your last name: ');
const age = prompt('And finally enter your age: ');
const full = `Let me introduce ${firstName} ${lastName} (${age} y.o.)`;
console.log(full);
