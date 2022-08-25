const users = [
    {
        id: 1,
        name: 'Naeem',
        job: 'Developer'
    }
]
// console.log(users[0].name);


const data = {
    count: 5000,
    data: [
        {
            id: 1,
            name: 'Naeem',
            job: 'Developer'
        },
        {
            id: 2,
            name: 'Hafiz',
            job: 'Network Engineer'
        }
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Ab Naeem',
    address: {
        street: {
            first: '35/A Mohammadpur',
            second: '7th floor'
        },
        postOffice: 'Mohammadpur',
        city: 'Dhaka'
    }
}

// ? -> Optional Chaining
// const userFloor = user.address.stret?.second;
const userFloor = user.address.street.second;
console.log(userFloor);




