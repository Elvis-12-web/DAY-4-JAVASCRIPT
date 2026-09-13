console.log("Day 4 JavaScript Fundamentals");


console.log("Practical Exercise 1: Scores");

const scores = [80, 65, 90, 72, 55, 88, 76, 95, 60, 70];

let total = 0;

for (const score of scores) {
    total = total + score;
}

const average = total / scores.length;

console.log("Total:", total);
console.log("Average:", average);


console.log("Practical Exercise 2: Pass or Fail");

function checkScore(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkScore(75));
console.log(checkScore(40));


console.log("Practical Exercise 3: Employee Object");

const employee = {
    name: "Elvis",
    department: "IT",
    role: "Frontend Developer",
    active: true
};

console.log(
    `${employee.name} works in the ${employee.department} department as a ${employee.role}. Active: ${employee.active}.`
);


console.log("Practical Exercise 4: Names and Positions");

const names = ["Elvis", "Kofi", "Ama", "Yaw"];

for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1}. ${names[i]}`);
}


console.log("Practical Exercise 5: Even or Odd");

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


console.log("Mini-Task: Employee Performance Checker");

const employees = [
    { name: "Elvis", score: 85 },
    { name: "Kofi", score: 72 },
    { name: "Ama", score: 91 },
    { name: "Yaw", score: 58 },
    { name: "Abena", score: 45 }
];

function getPerformance(score) {
    if (score >= 80) {
        return "Excellent";
    } else if (score >= 60) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

for (const employee of employees) {
    console.log(
        `${employee.name}: ${employee.score} - ${getPerformance(employee.score)}`
    );
}