class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
}

const hanSolo = new Player('Han Solo', 100, 10, ['Blaster']);
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

const raul = new Player('Raul', 90, 30, ['Computer']);
console.log(raul);
console.log(Object.getOwnPropertyNames(raul));
console.log(Object.getOwnPropertyNames(raul.__proto__));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
};

const darthVader = new AnotherPlayer('Darth Vader', 200, 20, ['Saber']);
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
const peter = new AnotherPlayer('Peter', 80, 10, ['Foo']);
console.log(peter);
console.log(Object.getOwnPropertyNames(peter));
console.log(Object.getOwnPropertyNames(peter.__proto__));
