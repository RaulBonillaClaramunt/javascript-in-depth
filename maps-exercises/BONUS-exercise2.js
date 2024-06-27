/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       out the INDEX of that value as well as the INDEX
       of where it was first found in "numbers"

    3. In this case, we will print:
       4 2

       (4 is where the duplicate index was)
       (2 is where the first pair of that duplicate was, as an index)

    HINT: Use a Map to keep track of number->index pairs

    *This is very challenging and is a common interview question
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const pairs = new Map();

for (let i = 0; i < numbers.length; i++) {

   if (pairs.has(numbers[i])) {
      console.log(i, numbers.indexOf(numbers[i]));
      break;
   } else {
      pairs.set(numbers[i], i);
   }
}

console.log(pairs);

/*
const pairs = new Map();
for (let i = 0; i < numbers.length; i++) {
   pairs.set(numbers[i], i);
}; ===> returns Map(6) { 10 => 8, 20 => 5, 15 => 4, 30 => 3, 35 => 6, 60 => 7 }
for (let i = 0; i < numbers.length; i++) {
   pairs.set(i, numbers[i]);
}; ===> returns Map(9) { 0 => 10, 1 => 20, 2 => 15, 3 => 30, 4 => 15, 5 => 20, 6 => 35, 7 => 60, 8 => 10
}
console.log(pairs);
*/
