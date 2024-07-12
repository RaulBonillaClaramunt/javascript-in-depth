/*
    1. Create a variable called "wizards" that points at the array:
       ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

    2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" return the name but with
        all the "n"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this

    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/

const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"];

const ifWizards = wizards.map((wizard) => {
    if (wizard.includes('n')) {
        let wizardLetters = wizard.split('');
        //console.log(wizardLetters);
        let i = wizardLetters.indexOf('n');
        //console.log(i);
        wizardLetters.splice(i, 1, '*');
        //console.log(finalName);

        return wizardLetters.join('');

    } else {
        return wizard.toUpperCase();
    }
});

const nWizards = wizards.map((wizard) => {
    return (wizard.includes('n'))
     ? wizard.replace('n', '*')
     : wizard.toUpperCase();
}
);

console.log(ifWizards);
console.log(nWizards);
