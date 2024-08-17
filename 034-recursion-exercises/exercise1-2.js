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
const palindrome = (string) => {

    if (string.length <= 1) return true;

    const firstChar = string[0];
    const lastChar = string[string.length -1];

    //if characters do not match it's not a palindrome
    if (firstChar !== lastChar) return false;


    //recursive case: check if substring is palindrome without first and last characters
    return palindrome(string.slice(1, string.length - 1));

};

console.log(palindrome('racecar'));
console.log(palindrome('level'));
console.log(palindrome('mom'));
console.log(palindrome('kayak'));
console.log(palindrome('curcu'));
