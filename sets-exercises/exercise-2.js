/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"

    *This is quite challenging and is a common interview question
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];
let unique = new Set();

for (const num of numbers) {
    if (unique.has(num)) {
      console.log(num);
      return num;
      //break; would be useful as well;
    }
    unique.add(num);
}

//console.log(unique);
