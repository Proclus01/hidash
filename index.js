const hidash = {
    // An implementation of forEach from scratch
    forEach(array, fn) {
        // for (let i = 0; i < array.length; i++) {
        //     // Store array value at index
        //     const value = array[i];

        //     // Call function and pass in value and index
        //     fn(value, i);
        // }

        for (let index in array) {
            fn(array[index], index);
        }
    }
};

export default hidash;