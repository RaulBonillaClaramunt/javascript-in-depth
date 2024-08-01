const alex = {
    name: "Alex",
    friend: {
        name: "Prya",
        greet: function(...args) {
            console.log(args);
            console.log(`${this.name} says hi!`);
            },
    },
};

//alex.friend.greet();

alex.friend.greet.call({name: "Mia" });//the call method allows us to manipulate the "this" valule
alex.friend.greet.call({name: "Mia" }, 1, 2, 3);
//with the call method we give "greet" the context of whatever we put inside the call arguments
alex.friend.greet.call({name: "Mia" }, "a", "b", "c");
