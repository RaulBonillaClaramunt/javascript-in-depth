const countryPop = {
Germany: 83,
Brazil: 212,
Egypt: 102,
};

//populate new Object with a for of loop
const countryPopExtended1 = {};

console.log(countryPop);
console.log("----");

for (entry of Object.entries(countryPop)) {
    const country = entry[0];
    const pop = entry[1];
    countryPopExtended1[country] = pop;
}
countryPopExtended1["Malaysia"] = 75;
countryPopExtended1["China"] = 1240;

console.log(countryPopExtended1);
console.log("----");
//populate new Object with spread operator
const countryPopExtended2 = {
...countryPop,
Indonesia: 273,
Japan:125,
}

console.log(countryPopExtended2);
console.log("----");
