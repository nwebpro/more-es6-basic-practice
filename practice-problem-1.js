/* 
1. You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.  
*/

const oddArray = [ 1, 3, 5, 7, 9 ]
const evenArray = oddArray.map(x => x + 1);
// console.log(evenArray);

const output = [];
for (const even of oddArray) {
    const double = even + 1;
    output.push(double); 
}
console.log('Array map value', output);

for(let i = 0; i < oddArray.length; i++){
    oddArray[i] = oddArray[i]+1;
}
console.log(oddArray);

/* 
2. You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. 
*/

const array = [33, 50, 79, 78, 90, 101, 30 ];
const divisible = array.filter(x => x % 10 === 0);
console.log('Filter value', divisible);

/* 
3. Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. 
*/

const arrFind = array.find(x => x % 10 === 0);
console.log('Find value: ', arrFind);




