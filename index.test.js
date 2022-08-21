import hidash from './index.js';

// A simple example of Manual Testing of code

// Initialize a counter to collect values from our example function
let sum = 0;

// Run the function and pass in a callback
hidash.forEach([1, 2, 3], value => {
    sum += value;
});

// After the function is run, check counter against a conditional (this is our test condition)
if (sum !== 6) {
    throw new Error('Expected summing array to equal to 6');
}