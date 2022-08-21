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
    },

    // An implementation of map from scratch
    map(array, fn) {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            result.push(fn(array[i], i));
        }

        return result;
    }
};

export default hidash;