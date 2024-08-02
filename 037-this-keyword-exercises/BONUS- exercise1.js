/*
    1. Create the following 2 functions:

    function ThisPerson(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }

    function ProtoPerson(name, age, favouriteFood) {
        return { // short-hand property initialization:
            name,
            age,
            favouriteFood,
        };
    }

    2. What is the difference between the following 2 instances?:
       const thisPerson = new ThisPerson("This", 0, "cookies");
       const protoPerson = ProtoPerson("Proto", 1, "?")

    3. How would you modify the ProtoPerson function to have it
       return the same thing as the ThisPerson function, but
       WITHOUT us having to use the "new" keyword still?

    *HINT: Think of how you'd modify/setup the prototype chain
*/
function ThisPerson(name, age, favouriteFood) {
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
}

function ProtoPerson(name, age, favouriteFood) {
    //ProtoPerson.__proto__ = ThisPerson.__proto__;
    const instance = { // short-hand property initialization:
        name,//equivalent to name: name,
        age,//equivalent to age: age,
        favouriteFood,
    };
    instance.__proto__ = ProtoPerson.prototype;
    return instance;
}

const thisPerson = new ThisPerson("This", 0, "cookies");
const protoPerson = ProtoPerson("Proto", 1, "?");
//2- thisPerson is a new instance of ThisPerson object
//while protoPerson calls ProtoPerson and passes some arguments
console.log(thisPerson);
console.log(protoPerson);
console.log("---");
console.log(thisPerson.__proto__.constructor.name);
console.log(thisPerson.__proto__.__proto__.constructor.name);
console.log(protoPerson.__proto__.constructor.name);
console.log(protoPerson.__proto__.__proto__.constructor.name);
//2- that means that with th ThisPerson we've created a custom object
//between the instance and the Object prototype
