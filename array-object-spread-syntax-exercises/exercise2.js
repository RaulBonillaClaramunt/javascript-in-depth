/*
    1. Create a variable called "animal" that points at this Object:
        { name: "Koala", kingdom: "Australia", cute: true,
          friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }

    2. Create a variable called "koala" that points at a COPY of
       "animal" using the spread operator for Objects, but add the
       following property as well: "tail": false

    3. Print out both "animal" as well as "koala"

    4. Change "cute" to be false inside of "animal". Print out both
       "animal" and "koala" again and observe the change. Does this
       make sense?

    5. Add a "cute" property initialized to be false inside of the
       "kangaroo" object, inside of the "friends" array in "animal".
       Print out both "animal" and "koala" again and observe the change.
       Does this make sense?
*/
const animal = { name: "Koala", kingdom: "Australia", cute: true,
    friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] };

const koala = {
    ...animal,
    tail: false,
};

console.log(animal);
console.log(koala);
console.log("-----");

animal.cute = false;

console.log(animal);//prints  cute: false
console.log(koala);//prints  cute: true
//it makes sense because cute is a primitive value in both objects
console.log("-----");

animal.friends[0].cute = true;

console.log(animal);//prints  cute: false
console.log(koala);//prints  cute: true
//it makes sense because cute is nested inside friends array
//thus it is a shallow copy and both animal and koala point at the same element
//in memory, so chianging one changes the other
console.log("-----");
