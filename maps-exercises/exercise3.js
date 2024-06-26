/*
    1. Create a Map called "houseForSale" with the following entries:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the entry with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new entry: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/
const houseForSale = new Map();
houseForSale.set('area', 940).set('value', 320000).set('streetName', 'Fifth Street');
houseForSale.set('built', '2012').set('owner', {name: 'Blake', age: 29}).set('offers', [290000, 295000, 315000, 312000]);

console.log(houseForSale);
console.log('-----------');

houseForSale.delete('built');
houseForSale.get('owner').age = 30;
console.log(houseForSale);
console.log('-----------');

const maxOffer = houseForSale.get('offers').reduce((acc, currentValue) => {
   if (acc < currentValue) {
    return currentValue;
   } else {
    return acc;
   }
}, 0);
console.log(maxOffer);
console.log('-----------');

houseForSale.get('offers').push(350000);
houseForSale.set('salePrice', 350000);
console.log(maxOffer);
console.log(houseForSale);
console.log('-----------');
