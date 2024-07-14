const animal = 'Monkey';

switch (animal) {
    case "Tiger": {
        console.log("You are a tigger");
        break;
    }
    case "Dragon":
    case "Monkey": {
        console.log("The best animal");
    }
    default: {
        console.log("404- animal not found");
        break;
    }
}

console.log("All done!");
