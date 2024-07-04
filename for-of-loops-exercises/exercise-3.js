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
backpack.add('1', {name: "Sword", value: 300});
backpack.add('2', {name: "Banana", value: 5});
backpack.add('3', {name: "Gold Nugget", value: 10000});
backpack.add('4', {name: "Pants", value: 100});

for (const item of backpack) {
    let nameAndValue = backpack.get(1);
    console.log(nameAndValue.name + ': ' + nameAndValue.value);
}
