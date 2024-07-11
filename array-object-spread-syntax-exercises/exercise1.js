/*
    1. Create an variable called "views" that points at this array:
       [ [5, 10, 20], [10, 20, 30] ]

    2. Create another variable called "viewsCopy" that creates a
       copy of "views" using the spread operator

    3. Print out "views" and "viewsCopy"

    4. Add the number 40 to the end of the second array inside "viewsCopy"
       and delete the last number (20) inside the first array

    5. Add the array [100, 200] to the end of "viewsCopy"

    6. Print out "views" and "viewsCopy"

    *Explain this behaviour
*/
const views = [ [5, 10, 20], [10, 20, 30] ];

const viewsCopy = [...views];

console.log(views);
console.log(viewsCopy);

viewsCopy[1].push(40);
viewsCopy[0].pop();

viewsCopy.push([100, 200]);

console.log(views);//prints [ [ 5, 10 ], [ 10, 20, 30, 40 ] ]
console.log(viewsCopy);//prints [ [ 5, 10 ], [ 10, 20, 30, 40 ], [ 100, 200 ] ]
//this happens because in the first two cases we are manipulating nested arrays
//so as they are not primitives, both variables point at he same element in memory
//while the last push adds an array that works as a primitive in viesCopy array
//and thus is not getting copied onto views array

const viewsCopy2 = [...viewsCopy, [30, 70]];
viewsCopy2[0].pop();
viewsCopy2[2].pop();

console.log(views);//prints [ [ 5, 10 ], [ 10, 20, 30, 40 ] ]
console.log(viewsCopy);
console.log(viewsCopy2);
