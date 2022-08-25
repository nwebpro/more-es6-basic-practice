const numbers = [2, 33, 21, 11];
const towTimes = numbers.map(x => x * 2);
const threeTimes = numbers.map(x => x * 3);
// console.log(towTimes);
// console.log(threeTimes);


const friends = ['Naeem', 'Hafiz', 'Pranta'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

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


const items = products.map(product => product.name);
console.log(items);

