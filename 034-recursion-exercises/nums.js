//sum up all nums in an array of numbers using loops
const nums = [1, 2, 3, 4, 5];

const sum = (numsArray)=> {
    let result = 0;
    for (let i = 0; i < numsArray.length; i++) {
    result += numsArray[i];
    }
    return result;

};

console.log('Result with loops i: ', sum(nums));

//sum up all nums in an array of numbers using recursion


const sum2 = (numsArray, index)=> {

    if (index === numsArray.length -1) {
        return numsArray[index];
    };

    return numsArray[index] + sum2(numsArray, index + 1);

};

const final = sum2(nums, 0);
console.log('Result with recursion is: ', final);
