//since the Child class in inherting all there is in the Parent class
//if there is a method in the Parent, we can call it from the Child
class Player {
    constructor(
        name,
        hp,
        mp,
        items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
    speak(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
}

class Warrior extends Player {
    constructor(
        name,
        hp,
        mp,
        items,
        shield) {
        super(name, hp, mp, items);//use the "super" keyword to "call" the base properties
        this.shield = shield;//add whaterver property is exclusive of this Bartender class
        //we can also call the speak method from the Parent inside the Child declaration
        //using the "super" keyword inside the Child's constructor
        super.speak('- Hmmm...');
    }
}

const warrior = new Warrior('Conan', 2000, 0, ['Sword'], 'Round shield');
//we can also "call" the speak method on Player Super Class from any instance
//since the instance refers to the Child prototype which refers the Parent prototype
//which has the speak method in it
warrior.speak('- If it bleeds, it can be killed.');
console.log(warrior);
