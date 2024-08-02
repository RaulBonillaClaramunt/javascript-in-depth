/*
    1. Create a function called "Person". It will have 3
       parameters: name, age, and favouriteFood. (function
       syntax, not arrow function!)

    2. Inside of Person, directly set these values:
       this.name = name;
       this.age = age;
       this.favouriteFood = favouriteFood
       (no return value is needed)

    3. Create a the following two variables:
       const avery = Person("Avery", 20, "Dark Chocolate");
       const jackie = new Person("Jackie", 35, "Sourdough Bread");

    4. Log out "avery" and "jackie" and explain what you see

    5. Log out the entire prototype chain of "jackie" (one by one)

    6. How would you explain what is happening when we use the
       "new" operator with a function in JS?
*/
/*
6. How would you explain what is happening when we use the
"new" operator with a function in JS?
Answer: the new keyword sets a new prototype
inheriting all Object prototype's properties and adding
wichever properties we add to the new created prototype
*/
function Person(name, age, favouriteFood) {
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
};

const avery = Person("Avery", 20, "Dark Chocolate");
const jackie = new Person("Jackie", 35, "Sourdough Bread");

console.log(avery);//this prints undefined cause Person is return nothing
console.log(jackie);//this prints the instance object (jackie)
//of the Person Object we created on line 23

//the following prints {}
console.log(jackie.__proto__);
//the following prints [Object: null prototype] {}
console.log(jackie.__proto__.__proto__);
//the following prints null cause is the end of the prototype chain
console.log(jackie.__proto__.__proto__.__proto__);

console.log("----");

//the following prints Person, as as our created Object name
console.log(jackie.__proto__.constructor.name);
//the following prints Object as it is the Object prototype name
console.log(jackie.__proto__.__proto__.constructor.name);
//the following prints null
console.log(jackie.__proto__.__proto__.__proto__);

console.log("----");

//the following prints Person prototype properties
console.log(Object.getOwnPropertyNames(jackie));//[ 'name', 'age', 'favouriteFood' ]
//the following prints Person Object properties ([ 'constructor' ]) cause we used "new" keyword
console.log(Object.getOwnPropertyNames(jackie.__proto__));//[ 'constructor' ]
//the following prints Person prototype's prototype properties
console.log(Object.getOwnPropertyNames(jackie.__proto__.__proto__));
//the following gives error cause you cannot convert Null or undefined to object
console.log(Object.getOwnPropertyNames(jackie.__proto__.__proto__.__proto__));
