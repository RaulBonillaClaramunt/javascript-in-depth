/*create an object called 'mexico' with the following properties:
*/

let mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbours: ["USA", "Guatemala", "Belize"]
};

console.log(mexico);

console.log(mexico["id"]);

mexico.id = 25;

mexico.neighbours.push("Honduras");

console.log(mexico);
