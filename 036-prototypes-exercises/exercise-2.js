/*
    1. Create a new Object and assign it to a variable
       called "fakeArray". Give it the following value:
       { "0": "Zero", "1": "One", "2": "Two", length: 3}

    2. Set the prototype of "fakeArray" to be Array.prototype

    3. Use the map method on "fakeArray" to log out each item
       in the array.

    4. What is happening here and why does this work?
*/
//const fakeArray = { "0": "Zero", "1": "One", "2": "Two", length: 3};
const fakeArray = { 0: "Zero", 1: "One", 2: "Two", length: 3};

console.log(Object.getOwnPropertyNames(fakeArray));
console.log(Object.getOwnPropertyNames(fakeArray.__proto__));
//if we log the fakeArray prototype properties we'll see an array of Object properties
console.log("---");

Object.setPrototypeOf(fakeArray, Array.prototype);
//another way to do this is:
//fakeArray.__proto__ = Array.prototype;
console.log(Object.getOwnPropertyNames(fakeArray.__proto__));
//if we log the fakeArray prototype properties we'll see an array of Array properties
//cause we just changed them from Object to Array in line 20 - or line 22
console.log("---");

//since we changed the inheritage of fakeArray from Object to Array
//we can now use Array methods in our fakeArray object!!!!
//as if it was an array
const map1 = fakeArray.map((el) => {
   console.log(el);
})
console.log("---");

console.log(fakeArray);
console.log("---");
console.log(fakeArray.length);
console.log(fakeArray["2"]);

console.log(fakeArray.length);
