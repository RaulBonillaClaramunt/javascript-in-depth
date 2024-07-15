const counter = function*() {
    yield 1;
    yield* [2, 3, 4];
    //we're using a yield* statement which stands for 3 yields with assigned values
    yield 5;
}

const generatorObject = counter();

for (const value of generatorObject) {
    console.log(value);
}

console.log("--");

//so we could rewrite the whole function like this:
const counter2 = function*() {
    yield* [1, 2, 3, 4, 24, 36];
}

const generatorObject2 = counter2();

for (const value of generatorObject2) {
    console.log(value);
}
