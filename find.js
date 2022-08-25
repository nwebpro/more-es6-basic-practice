const numbers = [2, 33, 21, 11, 121, 33, 24, 55, 76, 98, 90];
// Fine sudu protom jeyta milbe seyta output a dibe
const fives = numbers.find(number => number % 5 === 0);
// Filter korle se jey koyta pabe sob dibe output a 
const fivesAll = numbers.filter(number => number % 5 === 0);
// console.log(fives);
// console.log(fivesAll);

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

const cheap = products.find(p => p.price < 400000);
console.log(cheap);
