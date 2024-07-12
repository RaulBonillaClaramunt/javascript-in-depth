const makeTimeout = (ms) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("All done!");
        }, ms);
    });

    return timeout;
};

console.log("Program starting");

// this is the .then solution
makeTimeout(1000).then((result) => {
    console.log('from the .then', result);
});


//let's turn it into async /await syntax
const fetchStuff = async () => {
    const result = await makeTimeout(500);
    console.log('from the async function', result);
};

fetchStuff();//we'll need to call the async function in order to make it work ;)

console.log("Program complete...");
