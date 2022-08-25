// syntactic sugar
class Student{
    name;
    subject = 'CSE';
    group = '56th Batch';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    // Method
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    // Method
    createQuiz(subject){
        console.log(`Please create quiz for subject ${subject}`);
    }
}

const naeem = new Student('Naeem', 'Dhaka');
console.log(naeem);
naeem.startSupportSession('9;00');
naeem.createQuiz('C Network');

const hafiz = new Student('Hafiz', 'Mohammadpur');
console.log(hafiz);
