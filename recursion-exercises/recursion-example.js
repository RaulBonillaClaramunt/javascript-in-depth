const mine = {
  gold: 3,
  left: {
      gold: 2,
      left: { gold: 4 },
      right: { gold: 7 },
    },
  right: {
      gold: 5,
      right: { gold: 1 },
    }
}
const goldCount = (object)=> {
    let total = object.gold;
    //console.log(total);//3 2 4 --
    if (object.left) total += goldCount(object.left);
    //console.log(total);//  4 6 --
    if (object.right) total += goldCount(object.right);
    //console.log(total);// 7
    return total;
}
const result = goldCount(mine);
console.log(result);
