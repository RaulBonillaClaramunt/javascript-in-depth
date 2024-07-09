const myPromise = new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('Hello, my friend!');
    resolve("Here's your icecream");
    reject("Sorry, we haven't got that kind of icecream");
}, 2000);
});

myPromise
.then((resolvedValue) => {
    console.log("Promise seems to be done");
    console.log(resolvedValue);
    console.log(myPromise);
    return('Hey Ho!');
})
.then((anotherValue) => {
    console.log(anotherValue);
})
.catch((error) => {
console.log(error);
});

console.log("Hello?");
console.log(myPromise);

//So far, the code will print Hello?, will log "Promise { <pending> }"
//and after 2 seconds will print "Hello, my friend"
//then we are gonna resolve the Promise "Here's your icecream"
//which will automatically trigger any .then if there is one. Since there is one, it will run
//and print "Promise seems..." and then "Here's your icecream"
