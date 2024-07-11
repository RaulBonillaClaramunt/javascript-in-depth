const countryPop = {
    Germany: 83,
    Brazil: 212,
    Egypt: 102,
    Canada: {
        pop: 38,
    },
    };

const countryPopCopy = {
    ...countryPop,
}

console.log("countryPop is: ", countryPop);
console.log("countryPopCopy is: ", countryPopCopy);

delete countryPop["Germany"];
countryPop.Canada.flag = "Overrated";

console.log("countryPop is: ", countryPop);
console.log("countryPopCopy is: ", countryPopCopy);
