//Use a string
try {
    const message = "Hello there!"
    console.log(message);
    throw new Error("What an error!");
} catch (err) {
    console.error(err);
    console.log("Got it!");
}

console.log("Code keeps running... ;)");

//use an object
try {//let's imagine we get a user object from a third source
     //and that we are expecting a profile and colour property
    const user = {
        name: Alex,
        age: 21,
    };
    console.log(user.profile.colour);

} catch (err) {
    console.error(err);
};

console.log("wow!");
//this allows us to keep the code running even if there is an error

//scope
const message ="Hi!";
try {
    const message = "hello";
    console.log(message);
    throw new Error("Oh no!");
} catch (e) {
    console.error(e);
    console.error(message);
}

console.log("wow! 2");
