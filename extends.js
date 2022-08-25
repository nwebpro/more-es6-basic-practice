// syntactic sugar
// Master Class
class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} Thank you for your feedback.`);
    }
}

class Student extends TeamMember{
    subject = 'CSE';
    team = '56th Batch';
    constructor(name, location){
        super(name, location);
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

class Developer extends TeamMember{
    designation = 'Javascript Developer';
    group = 'Team JavaScript';
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    // Method
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    // Method
    release(version){
        console.log(`Please release the ${version}`);
    }
}


const naeem = new Developer('Ab Naeem', 'Dhaka', 'JavaScript');
console.log(naeem);
naeem.provideFeedback();

