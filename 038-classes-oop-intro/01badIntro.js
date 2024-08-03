const player = {
    name: "?",
    hp: 100,
    mp: 0,
    items: [],
};

const HanSolo = player;
const DarthVader = player;

console.log(HanSolo);
console.log(DarthVader);
//this 2 lines will print the same "player" object
//{ name: '?', hp: 100, mp: 0, items: [] }
//{ name: '?', hp: 100, mp: 0, items: [] }
//if we now customize HanSolo's properties, what will happen?
HanSolo.name = "Han Solo";
HanSolo.hp = 80;
HanSolo.mp = 20;
HanSolo.items = "Blaster";

console.log(HanSolo);
console.log(DarthVader);
//when we change the object in one instance
//we are actually changing the object it points at in Memory
//so all vars pointing at the same object in Memory
//we'll display the same changes:
//hence both HanSOlo and DarthVader will display:
//HanSolo - { name: 'Han Solo', hp: 80, mp: 20, items: 'Blaster' }
//DarthVader - { name: 'Han Solo', hp: 80, mp: 20, items: 'Blaster' }
