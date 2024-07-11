/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.

    Q1: Which of these 2 methods do you prefer?
    Q2: Which of these 2 methods is easier to read?
*/
const goGetCandies = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve({ candy: "sour keys", quantity: 10 });
       }, 2000);
    });
 };

 const sellCandies = (candies) => {
    return new Promise((resolve, reject) => {
       //console.log("This are incoming Candies: ", candies);
       const howManyCandies = candies.quantity * 25;
       //console.log(howManyCandies);
       setTimeout(() => {
          resolve("we've made " + howManyCandies + " cents of $");
       }, 3000);
    })
 };

 const candyMoney = async () => {
    const gottenCandies = await goGetCandies();
    //console.log("this are gottenCandies: ", gottenCandies);
    const moneyMade = await sellCandies(gottenCandies);
    console.log(moneyMade);
    const time2 = new Date();
    const timeLapse = time2 - time1;
    console.log(`Program ends after ${timeLapse} milliseconds ;)`);
 };

 console.log("Program starts...");
 const time1 = new Date();

const candies = goGetCandies();
candies.then((result) => {
    const sellValue = sellCandies(result);
    console.log(sellValue);
    sellValue.then((value) => {
        console.log(value);
    })


})

 candyMoney();
