/*
    1. Create an array called "points" with the following values:
       [10, 20, 10, 30, 15, 15, 35, 60, 10]

    2. How can you print out all the UNIQUE points inside "points"?
*/
const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];
let unique = new Set();

for (const num of points) {
    unique.add(num);
}

console.log(unique);
//Set(6) { 10, 20, 30, 15, 35, 60 }

let cheatUnique = new Set(points);

console.log(cheatUnique);
//Set(6) { 10, 20, 30, 15, 35, 60 }
