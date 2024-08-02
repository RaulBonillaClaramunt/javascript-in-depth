/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Make it so if we do: book.characters.list()
       It will always use this Array of mainChars permanently:
       ["Draco", "Severus", "Voldemort"]

       ^ Do not modify "mainChars", you can only change "list"
         Also, you cannot modify the "list" function itself

    HINT* What methods can we use on Functions to manipulate "this"?
*/
const book = {
    name: "Harry Potter",
    author: "J.K. Rowling",
    characters: {
        mainChars: ["Harry", "Ron", "Hermione"],

        list: function() {
            console.log(this);
            for (const char of this.mainChars) {
                console.log(char)
            }
        }
    }
};
book.characters.list();
console.log("--");
const badCharacters = book.characters.list.bind({mainChars: ["Draco", "Severus", "Voldemort"]});
badCharacters();//prints a list: Draco + Severus + Voldemort
console.log("--");
const badCharacters2 = book.characters.list.bind({mainChars: [["Draco", "Severus", "Voldemort"]]});
badCharacters2();//prints an array [ 'Draco', 'Severus', 'Voldemort' ]
console.log("--");
//so, if now we assign badCharaters to book.characters.list
//or if we assign it book.characters.list.bind({mainChars: ["Draco", "Severus", "Voldemort"]}),
//we'll get the same bad Charaters array, cause it is bound
book.characters.list = book.characters.list.bind({mainChars: ["Draco", "Severus", "Voldemort"]});
book.characters.list();
