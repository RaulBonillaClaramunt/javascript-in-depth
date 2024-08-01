Object.prototype.greet = function() {//we are manipulating the Object prototype for learning purposes
    console.log(this);//this prints "{ name: 'Raul' }" cause here "this" equals the "raul" object declared below
    console.log(`${this.name} says Hello!`);
};

const raul = {
    name: "Raul",
}

raul.greet();
