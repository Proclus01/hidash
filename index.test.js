import hidash from "./index.js";
import assert from "assert";

// // Test helper function 
// // -- rescopes any global variables to within the test function
// const test = (description, fn) => {
//     // -- automated descriptions for every test run as a title, right above any error message
//     console.log("----", description);

//     // -- ensures that the program never crashes when the test fails
//     try {
//         fn();
//     } catch (err) {
//         console.log(err.message);
//     }
// };

it("Test the forEach function", () => {
    // Initialize a counter to collect values from our example function
    let sum = 0;

    // Run the function and pass in a callback
    hidash.forEach([1, 2, 3], (value) => {
        sum += value;
    });

    // After the function is run, check counter against an assert (this is our test condition)
    assert.strictEqual(sum, 6, 'Expected for Each to sum the array');
});

it("Test the map function", () => {
    // Run the function first
    const result = hidash.map([1, 2, 3], (value) => {
        return value * 2;
    });

    // Use assert to check every array value
    assert.deepStrictEqual(result, [2, 4, 6]); // normally we modify some of these values to make a failing test
});

