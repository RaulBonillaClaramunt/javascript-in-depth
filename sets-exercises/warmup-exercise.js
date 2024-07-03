/*
    1. Create a variable called "numbers" that points to a new Set

    2. Add the following numbers to "numbers" (each a separate line):
       1, 2, 3, 4, 5, 2, 3, 4

    3. Print out "numbers" and note what is inside it

    4. Repeat the same steps above but with an array
       How does this differ?
*/
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);

//Set has unique elements. If a repeteaded element is added,
//it won't show
console.log(numbers);
let numbers2 = [];
numbers2.push(1);
numbers2.push(2);
numbers2.push(3);
numbers2.push(4);
numbers2.push(5);
numbers2.push(2);
numbers2.push(3);
numbers2.push(4);
console.log(numbers2);
