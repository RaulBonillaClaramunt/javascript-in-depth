class Player {
//we can declar a property also this way:
    age = 'inmortal';
//which will set a fixed property for all instances of Player prototype
//if we want to change it we'll do it like in line 22
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
//each of the properties inside the constructor method exist in
//each instance of the Player object
    }

    speak(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
//constructor and speak methods exist in the Player prototype
}

const hanSolo = new Player('Han Solo', 100, 10, ['Blaster']);
hanSolo.age = 69;//this way we change this instance of Player prototype's age property
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
hanSolo.speak("'It's never too late'");
console.log("---");

const raul = new Player('Raul', 90, 30, ['Computer']);
console.log(raul);
console.log(Object.getOwnPropertyNames(raul));
console.log(Object.getOwnPropertyNames(raul.__proto__));
raul.speak("'No matter what, I'm gonna make it!'");
console.log("---");

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
/*If we would do this:
    this.speak = function(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
the speak method in AP will be part of the instance of AP
and won't be part of the AP prototype*/
};
//So to have in the prototype, we need to fo this_
AnotherPlayer.prototype.speak = function(phrase) {
    console.log(`${this.name} says ${phrase}`);
};

const darthVader = new AnotherPlayer('Darth Vader', 200, 20, ['Saber']);
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
darthVader.speak("'I'm your father, dude!'");
console.log("---");

const peter = new AnotherPlayer('Peter', 80, 10, ['Foo']);
console.log(peter);
console.log(Object.getOwnPropertyNames(peter));
console.log(Object.getOwnPropertyNames(peter.__proto__));
/*So the class methods are a way to speed up the process of manipulating
our custom prototypes, which speeds up our code
*/
