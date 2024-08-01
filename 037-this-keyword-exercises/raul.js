const raul = {
    name: "Raul",
    greet: function() {
        console.log(`${this.name} says hi!`);//up to this line we don't know what "this" is gonna bind to until we call it
    },
}

raul.greet();//here we know "this" context is raul so that this.name will take "Raul" and print it
