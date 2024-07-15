const counter = function* () {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
};

const counterGenerator = counter();

//for (const count of counterGenerator) {
//    console.log(count);
//} this logs an infinite loop of numbers increased by one

//but if we do a while loop we can set a number of times yield is gonna be run:

let count = 0;
while (count < 5) {
    console.log(counterGenerator.next());
    count++;
}
/*
this will log vlaues out of the generator infinitely and done is never gonna b true
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
*/
