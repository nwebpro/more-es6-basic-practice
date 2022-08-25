const numbers = [2, 5, 11, 23, 14, 45];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output);

function getDoubles(numbers){
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(num){
    return num * 2;
}

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
// console.log(result);


// Shortcut way
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDouble);
console.log(makeDoubleDirect);


// Five Times Multiply Shortcut Way
const fiveTimes = [2, 3, 10, 12, 11].map(x => x * 5);
console.log(fiveTimes);