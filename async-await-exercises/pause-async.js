const makeTimeout = (ms) => {//prints string "All done!"
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("All done!");
        }, ms);
    });

    return timeout;
};

console.log("Program starting");

//this would make sense if result2 ws dependant of result1 being accomplished
const fetchStuff = async () => {
    console.log("Fetching first set of data...");
    const result1 = await makeTimeout(1000);
    console.log('Fetching second set of data...', result1);
    const result2 = await makeTimeout(2000);
    console.log('Done fetching data1...', result2);
};

//if result1 and result2 were independent matters, this would be the appropiate code
const fetchStuff2 = async () => {
    console.log("Fetching third set of data...");
    //getting rid of 'await' we turn const result1 into a regular Promise
    //so the program doesn't pause, it just runs a promise that'll take 2 secs to be run
    const result1 = makeTimeout(3000);
    console.log('Fetching fourth set of data...', result1);
    const result2 = makeTimeout(5000);
    //we can declare a const that will await for all promises to be done in order to run
    //using a Promise.all methid and providing it with an array of promises' results
    const finalResult = await Promise.all([result1, result2]);
    console.log('Done fetching data2...', finalResult);
};

fetchStuff();
console.log("-----");
fetchStuff2();

console.log("Program complete...");
