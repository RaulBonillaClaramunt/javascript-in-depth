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

//we could turn the above into this:
const thor2 = {
    name: 'Thor',
    greet: function() {
        console.log(`${thor2.name} says Hello!`);
    }
};

const jade2 = {
    name: 'Jade',
    greet: function() {
        console.log(`${jade2.name} says Hello!`);
    }
}
thor2.greet();
jade2.greet();
