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
        console.log(`${this.name} says - ${phrase}?`);
    }
}

class Warrior extends Player {
    constructor(
        name,
        hp,
        mp,
        items,
        shield) {
        super(name, hp, mp, items);
        this.shield = shield;
    }
//this line will override the speak method from the Parent
    speak(phrase) {
        console.log(`${this.name} SHOUTS - ${phrase}!!!!!!`)
    }
}

class Wizard extends Player {
    constructor(
        name,
        hp,
        mp,
        items,
        wand) {
        super(name, hp, mp, items);
        this.wand = wand;
    }
//this line will override the speak method from the Parent
    speak(phrase) {
        console.log(`${this.name} casts the ${phrase} spell.`)
    }
}

class Bartender extends Player {
    constructor(
        name,
        hp,
        mp,
        items,
        mug) {
        super(name, hp, mp, items);
        this.mug = mug;
    }
//since there is no speak method here, Bartender will use the speak method from the Parent
}

const warrior = new Warrior('Conan', 2000, 0, ['Sword'], 'Round shield');
const wizard = new Wizard('Meridth', 100, 1000, ['Pointy hat'], 'Oat wand');
const bartender = new Bartender('Manolo', 1000, 1000, ['Clothe'], "Big'ol Super Mug");
//console.log(warrior);
//console.log(wizard);
//console.log(bartender);

const players = [warrior, wizard, bartender];
console.log(players);
for (const player of players) {
    player.speak('FIRE');
}
