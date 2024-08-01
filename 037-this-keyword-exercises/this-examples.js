//we've got 2 objects
//and a function logging the value of the objects' property
const thor = {
    name: 'Thor',
};

const jade = {
    name: 'Jade',
}

function greet(hero) {
    console.log(`${hero.name} says Hello!`);
}
greet(thor);
greet(jade);

//we could TURN THE ABOVE into this:
const thor2 = {
    name: 'Thor2',
    greet: function() {//we'll have the "greet" function as an obejct property
        console.log(`${thor2.name} says Hello!`);
    }
};

const jade2 = {
    name: 'Jade2',
    greet: function() {
        console.log(`${jade2.name} says Hello!`);
    }
}
thor2.greet();
jade2.greet();

//we can also add a prototype property to rid of the repetition in the code above:
const thor3 = {
    name: 'Thor3',
};

const jade3 = {
    name: 'Jade3',
}
//then we add the "greet" property to the object prototype -for learning purposes - DO NOT USE THIS METHOD USUALLY
Object.prototype.greet = function() {
    console.log(`${this.name} says Hello!`);//"this" is gonna bind to the thor3 or the jade3 object when they are called
}

thor3.greet();
jade3.greet();
