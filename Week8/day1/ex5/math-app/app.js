
const _ = require('lodash');
const math = require('./math');

const sum = math.add(5, 3);
const product = math.multiply(4, 6);
const squareRoot = _.sqrt(25); // lodash utility function

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Square Root: ${squareRoot}`);
