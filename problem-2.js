/* You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

//for loop
const numbers = [1, 9, 17, 22];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]; 
}
console.log(sum);

// reduce
const addition = numbers.reduce((previous, current) => (previous + current), 0);
console.log(addition);