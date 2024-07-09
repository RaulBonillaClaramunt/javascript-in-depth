/*
    1. Create a try block that does the following:
        - Create a variable called "number" and initialize
          it to the number 1337
        - Add a random number between 0-1000 to "number"
        - Logs out "number"
        - If number is less than 2000:
            - Throws an Error Object with the message: "You lose!"
        - Otherwise, log out "You win!" with no throw/error
    2. Create a catch block that catches the error and logs it
    3. Inside the catch block, log out "number" as well

    4. What is the issue with this setup/code?
       - Issue is number is declared in the scope of try and catch can't access it

    5. How can we fix it so we can access "number" in the catch?
       - we can fix this error by declaring number in the outter scope
*/
let number = 1337;

try {
    //let number = 1337;

    number += Math.floor(Math.random() * (1000 - 0));

    console.log(number);

    if (number < 2000) {
        throw new Error ("You lose!");
    }

    console.log("You win!");
} catch (error) {
    console.log(error);
    console.log(`The number is ${number}`);
}
