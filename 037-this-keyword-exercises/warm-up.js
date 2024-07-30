/*
    1. Create the following Object and assign it to a variable
       named "pet":
       { name: "Nemo", type: "fish", age: 2 }

    2. Add a 'sayHello' function to the Object prototype. When
       called, it should log out the Object's name,
       type and age to match the following example:
       "Nemo is a fish and is 2 years old. Nemo says hi!"

       ^ This would be logged if we did pet.sayHello();

    3. Create another pet with different property values
       to make sure it works as well.
*/

const pet = {
    name: "Nemo",
    type: "fish",
    age: 2
}
console.log(Object.getOwnPropertyNames(pet.__proto__));

Object.prototype.sayHello = function() {
   console.log(this);
   console.log(`${this.name} is a ${this.type} and is ${this.age} years old.
      ${this.name} says Hi!`)
}
/*
pet.__proto__.sayHello = function() {
   console.log(`${name} is a ${type} and is ${age} years old. ${name} says Hi!`)
}*/

pet.sayHello();

const pet2 = {
   name: "Foo",
   type: "wombat",
   age: 3,
}

pet2.sayHello();
