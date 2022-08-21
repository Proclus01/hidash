import hidash from './index.js';

// A simple example of Manual Testing of code
let sum = 0;

hidash.forEach([1, 2, 3], value => {
    sum += value;
});

if (sum !== 7) {
    throw new Error('Expected summing array to equal to 6');
}