/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

const randomNumber = function*() {
   let i = 0;

   while(true) {
      yield Math.floor(Math.random() * i);
      i++;
   }
}

const generatorObject = randomNumber();

for (let index = 0; index < 10; index++) {
    console.log(generatorObject.next());
}
