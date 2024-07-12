/*
  1. Create a function called "over9000" that has a single
     parameter which is a Number. This function:
     - Returns "It's over 9000!!!" if the argument is > 9000
     - Returns "Taking a Nappa..." in all other cases

  2. Do step 1 with a regular if/else clause first

  3. Re-do step 1 with a ternary expressions

  BONUS: Can you shorten this with the short "arrow function
         expression" syntax?
*/
const over9000 = (number) => {
/*
   if (number > 9000) {
        return "It's over 9000";
    } else {
        return "Taking a Nappa";
    };
*/
    return (number > 9000) ? "It's over 9000" : "Taking a Nappa";
};

//using the short arrow syntax:
const over9001 = number => number > 9001 ? "It's over 9001": "Taking a Supernappa";

console.log(over9000(9002));
console.log(over9000(8002));

console.log(over9001(9002));
console.log(over9001(8002));
