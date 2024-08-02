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
};
//bind method binds a context for the this keyword so it is constant
//no matter when we use it
//greet will be bound to what we passed thorugh bind method
const boundGreet = paul.friend.greet.bind({name: "Lolo"});
//it passes bind as a function, so we can call it any time:
boundGreet();//it prints { name: 'Lolo' } + Lolo says hi!

//now, we can use the new bound element to apply it anywhere:
paul.friend.greet = paul.friend.greet.bind({name: "Lolo"});
//or applying it like this:
paul.greet = boundGreet;
//so if we call it from somewhere else, greet will print the same:
paul.friend.greet();//it prints { name: 'Lolo' } + Lolo says hi!
paul.greet();//it prints { name: 'Lolo' } + Lolo says hi!
