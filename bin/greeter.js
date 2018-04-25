#!/usr/bin/env node
console.log('Hello from my global module!')

const argv = require('yargs').argv;
// console.log(argv)

const greeter = require('../index.js');

console.log(greeter(typeof argv.name === 'string' ? argv.name : undefined));