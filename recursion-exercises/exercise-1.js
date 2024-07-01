/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/
/*pseudo code
split the string to get an array
we form a new array pushing the elements in inverse order
both arrays are the same once all the alements have been switched order,
then we return true
*/
const palindrome = (string, index) => {
    const arr = string.split('');
    let newArr = [];

    const reverse = (arr) => {
        if (newArr.length === arr.length) {
            return;
        }

        newArr.unshift(arr[index]);

    }


}
