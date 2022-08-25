const student = {
    name: 'Naeem',
    age: 23,
    class: 'CSE',
    marks: {
        cn: 95,
        ecom: 85,
        nm: 99,
        ai: 80
    }
}

const marks = student.marks;
const ai = student.marks.ai;

// Print result use notation
const nm = student['marks']['nm'];
const subject = 'ecom';
const subjectMask = student.marks[subject];
console.log(subjectMask);

