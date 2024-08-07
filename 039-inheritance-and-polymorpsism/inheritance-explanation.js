//Imagine we have a Game with three kinds of Player: Warrior, Wizard, Bartender
class Warrior {
    constructor(
        name,
        hp,
        mp,
        items,
        shield
    ) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        this.shield = shield;
    }
}
//if we were to create a Wizard class which were the same than Warrior
//(except that instead of shield the Wizard would have a wand)
//we could go like this (not following the DRY principle):
class Wizard {
    constructor(
        name,
        hp,
        mp,
        items,
        wand) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        this.wand = wand;
    }
}

//or set a Base/Super Class/Parent class which has all the properties
//any player shares:
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
}
//and then use the following syntax to take profit of inheritance: "extends"
//we tell the editor that there's a new class/Sub class/ CHild class
//that extends the Player class - adds properties on top of it.
class Bartender extends Player {
    constructor(
        name,
        hp,
        mp,
        items,
        mug) {
        super(name, hp, mp, items);//use the "super" keyword to "call" the base properties
        this.mug = mug;//add whaterver property is exclusive of this Bartender class
    }
}
//every Bartender instance will have the Bartender prototype
//which will refer to the Player prototype
//which will refer the Object prototype which will refer to Null
const bartender = new Bartender(
    'Manolo', 1000, 1000, ['Tray'],"Big'ol Super Mug"
)
console.log(bartender);
