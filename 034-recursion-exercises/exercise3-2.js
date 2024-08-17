/*
    1. Create a function called "flatten" that will take
       a single Object as an argument

    2. The function will return a flattened version of the Object
       no matter the nested levels (it will overwrite duplicate keys)

    3. Solve this using recursion

    Example:

    console.log(
    flatten({
        id: 1,
        name: "bob",
        happy: true,
        friend: {
        id2: 2,
        name2: "alice",
        happy2: true,
        },
    })
    );

    // { //   id: 1, //   name: 'bob', //   happy: true, //   id2: 2, //   name2: 'alice', //   happy2: true
    // }

    HINT: Use the "typeof" operator to check if something
          is an Object (naiive check, no need to be 100%)
    HINT2: The "delete" operator will delete a key from an Object
*/
const flatten = (object) => {
    let flattenedObject = {};
    let objectArray = Object.entries(object);

    //check if property's value is an object. If not, add property to new Object
    //if so, run flatten function with value (which is an obejct)
    for (const [key, value] of objectArray) {
        if (value !== null && typeof value === "object") {
            const flattenedElement = flatten(value);
            flattenedObject = {...flattenedObject, ...flattenedElement};
            return flattenedObject;
            /*Alternative code:
            for (const [innerKey, innerValue] of Object.entries(flattenedElement)) {
                flattenedObject[innerKey] = innerValue;
            }*/
        } else {
            flattenedObject[key] = value;
        }
    }
    /*Alternative code:
    for (const element of objectArray) {
        if (typeof element[1] === "object") {
            const flattenedElement = flatten(element[1]);

            for (const innerElement of Object.entries(flattenedElement)) {
                flattenedObject[innerElement[0]] = innerElement[1];
            }
        } else {
            flattenedObject[element[0]] = element[1];
        }
    }*/

    return flattenedObject;
};

console.log(
    flatten({
        id: 1,
        name: "bob",
        happy: true,
        friend: {
        id2: 2,
        name2: "alice",
        happy2: true,
        },
    })
);
