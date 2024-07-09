/*
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"

    4. Catch the error and console.error the loop number
    5. Make sure the loop goes all the way to 10
*/
let i;
try {
    for (i = 1; i <= 10; i++) {
        console.log(i);

        if (i === 5) {

                throw new Error ("Boom!");
            }
        }

}   catch (err) {
        console.error(`Error on loop # ${i}`);
}//in this case code won't keep on running 'cause "throw" gets us out
//of the "try" scope where the loop is in


//Alt version
for (let index = 1; index < 11; index++) {
    console.log(index);

    if (index === 5) {
        try {
            throw new Error ("Boom!");
        } catch (err) {
            console.log(`Error on loop # ${index}`);
        }
    }

}
