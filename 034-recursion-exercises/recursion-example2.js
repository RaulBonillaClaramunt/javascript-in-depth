//do a countdown using loops:
const countdown = (number) => {
    for (let i = 0; i <= number; i++) {
        console.log(number - i);
    }
}
countdown(5);

//do a countdown using recursion:
const countdown2 = (number) => {
    if (number < 0) return;

    console.log(number)
    countdown2(number - 1);
}
countdown2(5);

//do a countdown array using loops:
const countdown3 = (number) => {
    let countdownArray = [];
    for (let i = 0; i <= number; i++) {
        countdownArray.push(number - i);
    }
    console.log(countdownArray);
}
countdown3(5);

//do a countdown array using recursion:
const countdownArray = [];
const countdown4 = (number) => {

    if (number < 0) {
        console.log(countdownArray);
        return;
    }
    //recursive case
    countdownArray.push(number);
    countdown4(number -1);
}
countdown4(5);
