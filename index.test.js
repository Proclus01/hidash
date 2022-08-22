import hidash from "./index.js";

// Test helper function 
// -- rescopes any global variables to within the test function
const test = (description, fn) => {
    // -- automated descriptions for every test run as a title, right above any error message
    console.log("----", description);

    // -- ensures that the program never crashes when the test fails
    try {
        fn();
    } catch (err) {
        console.log(err.message);
    }
};

// 1. A simple example of Manual Testing of code

test("Test the forEach function", () => {
    // Initialize a counter to collect values from our example function
    let sum = 0;

    // Run the function and pass in a callback
    hidash.forEach([1, 2, 3], (value) => {
        sum += value;
    });

    // After the function is run, check counter against a conditional (this is our test condition)
    if (sum !== 7) {
        throw new Error("Expected summing array to equal to 6");
    }
});

// 2. An example of test driven development where we first create our tests before implementing a function

test("Test the map function", () => {
    // Run the function first
    const result = hidash.map([1, 2, 3], (value) => {
        return value * 2;
    });

    // Use a chain of conditionals to check every array value
    if (result[0] !== 2) {
        throw new Error(`Expected to find 2, but found ${result[0]}`);
    }
    if (result[1] !== 4) {
        throw new Error(`Expected to find 4, but found ${result[1]}`);
    }
    if (result[2] !== 6) {
        throw new Error(`Expected to find 6, but found ${result[2]}`);
    }
});

