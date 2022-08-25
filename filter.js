const numbers = [2, 33, 21, 11, 121, 33, 24, 55, 76, 98, 90];

const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 20);
const even = numbers.filter(num => num % 2 === 0);
// console.log(bigNums);
// console.log(tiny);
// console.log(even);


const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 450000
    },
    {
        id: 2,
        name: 'Phone',
        price: 15000
    },
    {
        id: 3,
        name: 'iPhone',
        price: 1150000
    },
    {
        id: 1,
        name: 'Computer',
        price: 550000
    },
];

const expensive = products.filter(product => product.price > 300000);
console.log(expensive);









