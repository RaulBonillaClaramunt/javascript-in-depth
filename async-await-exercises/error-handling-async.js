const makeTimeout = (ms) => {//prints string "All done!"
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("All done!");
            reject("Something went wrong :(");
        }, ms);
    });

    return timeout;
};

const causeError = async () => {
    try {
        const result = await makeTimeout(2000);
        console.log(result);
    } catch(error) {
        console.log("We are in hte error case!");
        console.error(error);
    }
};

console.log("Let's see what happens ;)");
causeError();
console.log("Life goes on thanks to the try/catch statements");
