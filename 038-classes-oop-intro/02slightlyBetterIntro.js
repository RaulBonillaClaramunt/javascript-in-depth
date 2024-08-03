const createPlayer = (name, hp, mp, item) => {
    return {
    name,// === name: name,
    hp,
    mp,
    item,
    };
};
const HanSolo = createPlayer(
    'Han Solo',
    100,
    10,
    ['Blaster']
);
console.log(HanSolo);

const DarthVader = createPlayer('Darth Vader', 200, 50, ['Saber']);
console.log(DarthVader);
//now, if we change a property in Han Solo
//we don't change anything in Darth Vader or elsewhere
