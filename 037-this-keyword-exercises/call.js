const paul = {
    name: "Paul",
    greet: function() {
        console.log(this);
        console.log(`${this.name} says hi!`);
    },

    arrowGreet: () => {
        console.log(this);
        console.log(`${this.name} says hi!`);
    },

    friend: {
        name: "Paul's friend",
        greet: function() {
            console.log(this);
            console.log(`${this.name} says hi!`);
        },
    },

    friend2: {
        name: "Paul's best friend",
        greet: function(a, b) {
            console.log(this);
            console.log(a, b);
            console.log(`${this.name} says hi!`);
        },
    },
};

paul.greet();
console.log(" - ");
paul.friend.greet();
console.log(" - ");
paul.friend2.greet();
console.log("---");

//call method syntax being this: call(thisArg, arg1, arg2, /* …, */ argN)

paul.greet.call({name: "Frida"});
console.log(" - ");
paul.friend.greet.call({name: "Flípalo"});
console.log(" - ");
paul.friend2.greet.call({name: "Palo"}, "hello", 3);
console.log("---");
