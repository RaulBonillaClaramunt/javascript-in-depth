const paul = {
    name: "Paul",
    greet: function() {
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
        greet: function(...args) {
            console.log(this);
            console.log(args);//it prints the arguments (not the first one cause is the context for .this) in an array: [ 'hello', 3 ]
            console.log(`${this.name} says hi!`);
        },
        greet2: function(a, b) {
            console.log(this);
            console.log(a, b);//prints the same than line 25 but individually, not as an array: hello 3
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
//it binds the this keyword using th efirst argument of the fuunction and

paul.greet.call({name: "Frida"});
console.log(" - ");
paul.friend.greet.call({name: "Flípalo"});
console.log(" - ");
paul.friend2.greet.call({name: "Palo"}, "hello", 1, "rumble", 33);
//...args being passed, above line prints [ 'hello', 1, 'rumble', 33 ] from calling line 18
paul.friend2.greet2.call({name: "Palo"}, "goodbye", 3, "I'm done");
//a and b being passed as arguments, above line prints goodbye 3 from calling line 25
console.log("---");
