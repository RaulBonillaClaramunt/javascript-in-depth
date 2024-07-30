/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/
console.log(Object.getOwnPropertyNames(Object));//prints the Object properties
console.log(Object.getOwnPropertyNames(Object.prototype));//prints the Object prototype properties

console.log(Object.getOwnPropertyNames(Array.prototype));//this 2 lines
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));//this prints the same than line 14 -  it is the Array's prototype' prototype
/*
console.log(Object.getOwnPropertyNames([].__proto__));//print the same

console.log(Object.getOwnPropertyNames([].__proto__.__proto__));
*/

console.log(Object.getOwnPropertyNames([].__proto__.__proto__.__proto__));
//this will return an error cause NULL can't be cinverted into an object - hence, we are at the end of the prototype chain
