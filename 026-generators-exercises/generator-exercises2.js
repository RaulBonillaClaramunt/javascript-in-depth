//use this file to take further notes
//so yield/.next work a bit as a mix of await and return:
//it will pause running the code until another .next is called - as await does
//but will run code syncronously, unlike await - which runs next piece of code while awaiting
const counter = function* () {
    yield 1;
    yield 2;
    yield 3;
}

const counterGenerator = counter();

console.log(counter);//this logs [GeneratorFunction: counter]
console.log(counterGenerator);
/*
for (const count of counterGenerator) {
    //we cannot iterate through "counter" cause we need to construct the generator
    //object first, and then we can iterate through it
    console.log(count);
    //this prints 1
                //2
                //3
}
*/
//how could we do the same with a regular loop?
let counterObject = counterGenerator.next();//we know .next will log 1, then 2, then 3
//we can use a while loop
console.log(counterObject);

while (counterObject.done === false) {
    console.log(counterObject.value);//logs { value: 1, done: false }
    counterObject = counterGenerator.next();//moves to the next yield
    console.log(counterObject);
}

console.log("All done!");
//If we run both loops, the second won't run cause once the generator is built
//it is DONE ;)

/*it all logs the following:
[GeneratorFunction: counter]
Object [Generator] {}
{ value: 1, done: false }
1
{ value: 2, done: false }
2
{ value: 3, done: false }
3
{ value: undefined, done: true }
All done!
*/
