const counter = function* () {
    yield 1;
    yield 2;
    return;//we're prooving return statement stops the iteration in generators
    yield 3;
}

const counterGenerator = counter();

console.log(counter);
console.log(counterGenerator);

for (const count of counterGenerator) {
    console.log(count);
}

console.log(counterGenerator.next());
/*we'll have the following printed out:
[GeneratorFunction: counter]
Object [Generator] {}
1
2
{ value: undefined, done: true } => prooving the generator is done after the return ;)
*/
