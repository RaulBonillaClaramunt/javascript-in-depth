//we can change the Object prototype to Array prototype
//so we can then use all Array methods on our "animal" object
const animal = {
    type: "monkey",
    __proto__: Array.prototype,
};
console.log(animal);//it prints Array { type: 'monkey' } instead of a regular object between curly brachets
console.log(Object.getOwnPropertyNames(animal));//it will print [ 'type' ] as an array, and the __proto__ line won't appear
//here things get interesting: we'll get all the Array methods printed
//which are all the prototype properties of an array
console.log(Object.getOwnPropertyNames(animal.__proto__));

//we can then print the prototype of the Array prototype we have:
console.log(Object.getOwnPropertyNames(animal.__proto__.__proto__));//it'll print the prototype properties

//and if we get further we'll finally hit the null prototype, we are at the end of the prototypal chain
console.log(animal.__proto__.__proto__.__proto__);
