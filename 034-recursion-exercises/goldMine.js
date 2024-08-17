const mine = {
    gold: 3,
    left: {
        gold: 2,
        left: {
            gold: 4,
        },
        right: {
            gold: 1,
        }
    },
    right: {
        gold: 5,
        right: {
            gold: 1,
        }
    },
};


const goldCounter = (level) => {
    let total = level.gold;
       //console.log(total);
    if (level.left) total += goldCounter(level.left);
       //console.log(total);
    if (level.right) total += goldCounter(level.right);
       //console.log(total);
    return total;

};

const result = goldCounter(mine);
console.log(result);
