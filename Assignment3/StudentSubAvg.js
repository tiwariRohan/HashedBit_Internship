const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const calculateAverage = (scores) => {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const average = total / Object.values(scores).length;
    return average;
};

const studentAverages = Object.keys(students).reduce((acc, student) => {
    acc[student] = { average: calculateAverage(students[student]) };
    return acc;
}, {});

console.log(studentAverages);
