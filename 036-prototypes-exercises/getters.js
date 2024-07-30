/*
creating an object can be done in two ways:
const object1 = {};
or
const object2 = new Object [];
*/
const animal = {
    type: "monkey",
    numLegs: 2,
};

console.log(animal);

console.log(animal.__proto__);//we get the animal prototype
console.log(animal.__proto__.__proto__);//we get null, cause we are at the end of the prototype chain
//we are at the end of the prototypal chain

console.log(Object.getPrototypeOf(animal));//newer way to write __proto__ method

console.log(Object.getOwnPropertyNames(animal));
console.log(Object.getOwnPropertyNames(animal.__proto__));

//we can add properties to the Prototype, in this case a function called 'speak':
Object.prototype.speak = function() {
    console.log('Hi from prototype!');
}

animal.speak();

//so if we create a second animal, it will still have speak as a property in the Prototype:
const animal2 = {
    type: 'cat',
}
console.log(animal2);
animal2.speak();
