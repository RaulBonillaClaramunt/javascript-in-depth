/*
    1. Create a function called "flatten" that will take
       a single Array as an argument

    2. The function will return a flattened version of the Array
       no matter the nested levels

    3. Solve this using recursion

    Examples:
        console.log(flatten([1, 2, 3]));
        // [ 1, 2, 3 ]

        console.log(flatten([1, 2, 3, [1, 2, 3]]));
        // [ 1, 2, 3, 1, 2, 3 ]

        console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
        // [1, 4, 5, 6, 7,8, 9, 2, 3]

    HINT: Look up "how to check if something is an Array in js"
          on Google/MDN
    HINT2: What are the base-cases and what do we want to return?
*/
const flatten = (array) => {
    let newArray = [];
    //decalre a for of loop to iterate through each array element
    for (const el of array) {
        if (!Array.isArray(el)) {
            newArray.push(el)
        }
        if (Array.isArray(el)) {
    //... allows you to expand an iterable (like an array) into individual elements.
    //In the context of a recursive function, it flattens nested structures.
            newArray.push(...flatten(el));
        };
    }
    return newArray;
};

console.log(flatten([1, 2, 3]));
// [ 1, 2, 3 ]

console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
// [1, 4, 5, 6, 7, 8, 9, 2, 3]
