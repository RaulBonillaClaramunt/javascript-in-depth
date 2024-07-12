/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the property with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new property: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: {name: "Blake", age: 29},
    offers: [290000, 295000, 315000, 312000]
}

console.log(houseForSale);//2. Print out "houseForSale" to the terminal
delete houseForSale.built;//3. Delete the property with the key "built"
houseForSale.owner.age = 30;//4. Change the age of the owner to be 30 inside "houseForSale"

console.log(houseForSale.offers.reduce((acc, offer) => {//5. Print out the maximum offerPrice (use reduce)
    if (offer > acc) {
        return offer;
    } else {
        return acc;
    }
}, 0)
);
/*ALTERNATIVELY - MORE READABLE!
let maxOffer = houseForSale.offers.reduce((acc, offer) => {//5. Print out the maximum offerPrice (use reduce)
    if (offer > acc) {
        return offer;
    } else {
        return acc;
    }
}, 0);
console.log(maxOffer);
*/
houseForSale['sale price'] = 312000;//6. Add a new property: "sale price" -> 312000
console.log(houseForSale);//7. Print out "houseForSale" to the terminal
