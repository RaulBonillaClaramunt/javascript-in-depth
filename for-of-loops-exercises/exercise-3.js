/*
    1. Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    2. Use a for-of loop to loop over "backpack" and print out
       the name and the value for each item in the following format:
       Name: $Value
       For example: Sword: $300

    3. Also print out the total value of all items in the backpack
*/
const backpack = new Map();
backpack.set(1, {name: "Sword", value: 300});
backpack.set(2, {name: "Banana", value: 5});
backpack.set(3, {name: "Gold Nugget", value: 10000});
backpack.set(4, {name: "Pants", value: 100});
/*
    let nameAndValue = backpack.get(1);
    console.log(nameAndValue.name + ': ' + nameAndValue.value);
*/
for (const item of backpack) {//[1, {name: "Sword", value: 300}]
    console.log(item[1].name + ': $' + item[1].value);
};
let count = 0;
for (const item of backpack) {
    count += item[1].value;
}
console.log(count);
