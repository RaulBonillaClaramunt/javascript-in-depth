/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

const randomNumber = function*() {

   while(true) {
      yield Math.random();
   }
}
const generatorObject = randomNumber();

for (let index = 0; index < 10; index++) {
    /*console.log(generatorObject.next()); => this prints 10 objects:
      { value: 0.0912954543814044, done: false }
      { value: 0.948635285636295, done: false }
      { value: 0.22610960732848073, done: false }
      { value: 0.5782114710861883, done: false }
      { value: 0.7970763900859699, done: false }
      { value: 0.2802888303007651, done: false }
      { value: 0.933776783188561, done: false }
      { value: 0.8554230268194394, done: false }
      { value: 0.5370387716934288, done: false }
      { value: 0.9484720981152408, done: false }
      to get the values we need to add the .value statement: */
    console.log(generatorObject.next().value);
}
//to do it using a for of loop (although for of loops are meant
//to be used to iterate through every single item of an iterable):
let zeroToTen = 0;
for (const value of generatorObject) {
   console.log(value);
   zeroToTen ++;
   if (zeroToTen === 10) {
      break;
   }
}

/*
my raw take:
const randomNumber = function*() {
   let i = 0; //ou don't need this to make an infinite loop (as seen above)

   while(true) {
      yield Math.floor(Math.random() * i);
      i++;
   }
}

const generatorObject = randomNumber();

for (let index = 0; index < 10; index++) {
    console.log(generatorObject.next());
}
*/
