const fetchData = async () => {
    return "Hello!";//"Hello!" is wrapped as a Promise
};

const result1 = fetchData();
console.log(result1);//this prints: Promise {'Hello!'}

//if we want the 'Hello!' printed like a string we'd need a .then
//to resolve the Pormise "Hello!"
result1
.then((value) => {
    console.log(value);//this prints: Hello!
});

//we can also do the same with async/await
const useHello = async () => {
    const result2 = await fetchData();
    console.log(result2);
}

//we need to call useHello in order for it to run
useHello();
