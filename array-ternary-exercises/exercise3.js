/*create a variebla called 'characters' that points to an array
*/
let characters = ['Han Solo', 'Spock', 'Darth Vader', 'Yoda', 'Neo', 'Sarah Connor'];

let newArray = [];

characters.forEach((el) => {
    if (el.includes(' ')) {
        newArray.push(el);
    }


});

return newArray;
