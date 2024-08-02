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
        greet: function(arg) {
            console.log(this);
            console.log(arg);
            //for line 32, line 20 only prints 11
            //for line 35 it prints [11, 22, 33]
            console.log(`${this.name} says hi!`);
        },
    },
};
//apply method works as call method but only takes a second argument
//it takes it in the form of an array, so if you have an array of elements
//you can declare it polute it and then pass it onto the apply method

paul.friend.greet.apply({name: "Palo"});
paul.friend2.greet.apply({name: "Frida"}, [11, 22, 33]);

const numbers = [11, 22, 33];
paul.friend2.greet.apply({name: "Frida", age: 30}, [numbers]);

paul.friend2.greet.apply({name: "Pablo", age: 50}, [[11, 22, 33]]);
