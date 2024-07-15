//use this file to take notes
console.log("I don't have a clue what generators are about ;)");
console.log("Here's some code:");

const counter = function* () {
    //line 13 will only run until here. NO longer code will run until we use a .next
    console.log("This is first log");
    yield 1;
    console.log("This is after first yield");
    yield 2;
    yield 3;
}

const counterGenerator = counter();

console.log(counter);//this logs generator function: [GeneratorFunction: counter]

console.log(counterGenerator);//this logs generator object: Object [Generator] {}

console.log(counterGenerator.next());//this logs { value: 1, done: false }
console.log(counterGenerator.next());//this logs { value: 2, done: false }
console.log(counterGenerator.next());//this logs { value: 3, done: false }
console.log(counterGenerator.next());//{ value: undefined, done: true }
//done: false stands for "generator done? NO, false statement"
//that's why the fourt .next returns true (and undefined value)

/*
it all logs the following:
I don't have a clue what generators are about ;)
Here's some code:
[GeneratorFunction: counter]
Object [Generator] {}
This is first log
{ value: 1, done: false }
This is after first yield
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/
