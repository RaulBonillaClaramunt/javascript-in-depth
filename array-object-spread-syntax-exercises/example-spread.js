//spread with arrays
const array1 = [10, 20, 30, 40, 50];
const array2 = [];

for (const num of array1) {
    array2.push(num);
};

console.log("array1: ", array1);
console.log("array2: ", array2);
console.log("----");

array2.pop();

console.log("array1: ", array1);
console.log("array2: ", array2);
console.log("----");

const array3 = [...array1];

console.log("array1: ", array1);
console.log("array3: ", array3);
console.log("----");

array3.shift();

console.log("array1: ", array1);
console.log("array3: ", array3);
console.log("----");

const array4 = [0, 5, 10, ...array3, 60, 70, 80];

console.log("array3: ", array3);
console.log("array4: ", array4);
console.log("----");

//spread with strings
const name = 'Charles';
const greetings = ['Hello ', ...name, ', how are you doig?'];
console.log(greetings);
console.log(greetings.join(''));

//spread with Sets
const mySet = new Set();

mySet.add("Batman");
mySet.add("Robin");
mySet.add("Spiderman");
mySet.add("Batman");

console.log(mySet);

const mySet2 = [...mySet, "Superman"];
console.log(mySet2);

//spread with Maps

const stock = new Map();

stock.set("Apples", 3);
stock.set("Bananas", 4);
stock.set("Mangos", 20);

console.log(stock);

const newStock = [...stock];

console.log(newStock);

//spread with Objects
