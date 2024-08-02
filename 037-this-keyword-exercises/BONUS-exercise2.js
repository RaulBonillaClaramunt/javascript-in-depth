/*
    1. Create the following function:

    function Person(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }

    2. Add the following to the Person prototype:
        Person.prototype.greet = function() {
            console.log(`${this.name} says hello!`);
        }

    2. Create a function called "SuperHero" that
       has the same 3 parameters as Person, but
       adds a fourth one called: "overpowered"

    3. Inside the "SuperHero" function, set up all the
       properties on to the "this" Object just like in
       Person, with the addition of "overpowered".

    5. Set the Prototype of "SuperHero" to be "Person"
       (This can be done in 2 ways)

    6. Create an instance of Person and SuperHero:
       const anya = new Person("Anya", 40, "Sour Keys")
       const batman = new SuperHero("Bruce", 55, "Steak", false)

    7. Log out the prototype chains of each of these Objects
    8. Can you call "greet" on batman? Why?
    9. What properties are on each Object? Why?

    BONUS: Did we just create Object Oriented Programming?
    */
    function Person(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    };
    //console.log(Person.prototype);
    Person.prototype.greet = function() {
        console.log(`${this.name} says hello!`);
    };
    //console.log(Person.prototype);
    function SuperHero(name, age, favouriteFood, overpowered) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
        this.overpowered = overpowered;
    };
    /*Alternatively we could code it like this:
    function SuperHero(name, age, favouriteFood, overpowered) {
    Person.call(this, name, age, favouriteFood); // Call the Person constructor
    this.overpowered = overpowered;
    };*/

    //alternatives for the same outcome (from worst to best)
    //SuperHero.prototype.__proto__ = Person.prototype;
    Object.setPrototypeOf(SuperHero.prototype, Person.prototype);

const anya = new Person("Anya", 40, "Sour Keys");
const batman = new SuperHero("Bruce", 55, "Steak", false);

anya.greet();
batman.greet();
console.log("---");

console.log(anya.__proto__.constructor.name);
//console.log(anya.__proto__);
console.log(anya.__proto__.__proto__.constructor.name);
//console.log(anya.__proto__.__proto__);
console.log("---");
console.log(batman.__proto__.constructor.name);
//console.log(batman.__proto__);
console.log(batman.__proto__.__proto__.constructor.name);
//console.log(batman.__proto__.__proto__);
console.log(batman.__proto__.__proto__.__proto__.constructor.name);
//console.log(batman.__proto__.__proto__.__proto__);
