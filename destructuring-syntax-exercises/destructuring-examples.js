const cities = ["Vancouver", "Mexico City", "London", "Berlin", "New York"];

const [city1, city2] = cities;

console.log(city1);
console.log(city2);
//this is way shorter than declaring variables one by one:
//const city1 = cities[0];
//const city2 = cities[1];

const [,, city3,, city5] = cities;
console.log(city3);
console.log(city5);

console.log("------");
//let's study objects

const movie = {
    title: "Dune",
    year: 2023,
    length: 155,
    book: true,
};

const { length, title, review } = movie;

console.log(title);
console.log(review);
console.log(length);
