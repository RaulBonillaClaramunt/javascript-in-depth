/*
    1. Create a variable called "superhero" that points at this Object:
        {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95}   }

    2. How would you create a COPY of the Object pointed to by
       "superhero" INCLUDING COPIES of "enemies" and "bestMovie".

    3. Once you've created a total copy, modify the following:
       - add "Poison Ivy" to the copy's array of "enemies"
       - add { year: 2008 } to the copy's "bestMovie" Object

    4. Print out both "superhero" and it's copy to ensure that
       "superhero"'s "enemies" and "bestMovie" were NOT modified.

    *This can be done MANY different ways but is also quite challenging!
*/
const superhero = {
    name: "Bruce Wayne",
    enemies: ["Joker", "Catwoman", "Bane"],
    bestMovie: {title: "The Dark Knight", rating: 95}
}
//make a COPY of superhero including enemies and bestMovie properties

const superheroCopyBad = {
    ...superhero,
};
console.log('superheroCopyBad is: ', superheroCopyBad);

// we'll use JSON here to make a deep copy:
const superheroCopy = JSON.parse(JSON.stringify(superhero));
console.log('superheroCopy is: ', superheroCopy);

//- add "Poison Ivy" to the copy's array of "enemies"
//- add { year: 2008 } to the copy's "bestMovie" Object

superheroCopy.enemies.push("Poison Ivy");
superheroCopyBad.enemies.push("Bigguz Dickuzz");

superheroCopy.bestMovie.year = 2008;
superheroCopyBad.bestMovie.year = 3005;

console.log('superheroCopy modified is: ', superheroCopy);
console.log('superhero is: ', superhero);

//we'll do it now only using spread operator
const superheroCopySpread = {
    ...superhero,
    enemies: [...superhero.enemies],
    bestMovie: { ...superhero.bestMovie },
}

superheroCopySpread.enemies.splice(2, 1);

console.log('This is superheroCopySpread: ', superheroCopySpread);
console.log(superhero);
