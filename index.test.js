const greeter = require('./index.js');

console.log('Starting tests');

const resOne = greeter();
if (resOne !== 'Hello, student!') {
  throw new Error('Greeter not working with default argument!');
}

const resTwo = greeter('Serg');
if (resTwo !== 'Hello, Serg!') {
  throw new Error('Greeter is not working with name argument!');
}

