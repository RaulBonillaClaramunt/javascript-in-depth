const raul = {
    name: "Raul",
    greet: function() {
        console.log(this);
        console.log(`${this.name} says hi!`);//up to this line we don't know what "this" is gonna bind to until we call it
    },
}
raul.greet();//here we know "this" context is raul so that this.name will take "Raul" and print it
console.log("--");

const paul = {
    name: "Paul",
    friend: {
        greet: function() {
        console.log(this);
        console.log(`${this.name} says hi!`);//up to this line we don't know what "this" is gonna bind to until we call it
        }
    },
}
paul.friend.greet();//prints "undefinded says hi!" cause "this" binds to what is on the left of .greet()
//which is "friend" property, and friend has no name property (only a greet property)
console.log("--");

//but if we add a "name" property inside the "friend" property, the "this" use will work as intended.
const iban = {
    name: "Iban",
    friend: {
        name: "Paul's friend",
        greet: function() {
            console.log(this);
            console.log(`${this.name} says hi!`);
            },
    },
};
iban.friend.greet();//it works cause friend is the context for the greet function and it ahs a "name" property
console.log("--");
