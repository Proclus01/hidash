const hidash = {
    // An implementation of forEach from scratch
    forEach(array, fn) {
        for (let i = 0; i < array.length; i++) {
            // Store array value at index
            const value = array[i];

            // Call function and pass in value and index
            fn(value, i);
        }
    }
};

// A simple example of Manual Testing of code
hidash.forEach([1, 2, 3], value => {
    console.log(value);
});

export default hidash;