//we use the new keyword to build our own Objects
//and then we can create instances of this object

function Hero(name) {
    this.name = name;
    this.greet = function() {
        console.log(this);
        console.log(`${this.name} says hi!`);
    }
}

const storm = new Hero("Storm");
storm.greet();
console.log("1-");

storm.greet.call({ name: "Cusi Cusi" });
console.log("2-");
console.log(Object.getOwnPropertyNames(storm));//it prints [ 'name', 'greet' ]
console.log("3-");
console.log(Object.getOwnPropertyNames(storm.__proto__));//it prints [ 'constructor' ]
console.log("4-");
console.log(storm.__proto__.constructor);
console.log("5-");
console.log(storm.__proto__.constructor.name);
console.log("6-");
console.log(storm.__proto__.__proto__.constructor.name);//it prints Object
//because the prorotype of Hero is the Object prototype
console.log("7-");
console.log(storm.__proto__.__proto__.__proto__);//it prints Null
//cause it is the end of the prototype chain
console.log(storm.__proto__.__proto__.__proto__.__proto__);//this gives error
//cause you can not read properties of Null ;)
