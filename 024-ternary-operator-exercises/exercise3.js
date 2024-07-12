/*
    1. Create a variable called "characters" that points at the array:
       ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]

    2. Filter over "characters" to create a new array that does the following:
      - If the name has a space in it " ", keep it in the result (return true)
      - Otherwise, filter it out (return false)
      - Use a regular if/else statement for this

    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/


const characters = ['Han Solo', 'Spock', 'Darth Vader', 'Yoda', 'Neo', 'Sarah Connor'];

const doubleNameCharacters1 = characters.filter((name) => {
    if (name.includes(' ')) {
        return true;
    } else {
        return false;
    }
});

let doubleNameCharacters2 = characters.filter((name) => {
    return (name.includes(' '))
    ? true
    : false;
});

let doubleNameCharacters3 = characters.filter((name) =>
    name.includes(' ') ? true : false
);

const doubleNameCharacters4 = characters.filter((character) =>
    character.includes(' ')
//we can even get rid of "? true : false" since includes returns a boolean
);

console.log(doubleNameCharacters1);
console.log(doubleNameCharacters2);
console.log(doubleNameCharacters3);
console.log(doubleNameCharacters4);
