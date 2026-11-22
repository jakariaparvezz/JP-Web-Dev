const students = [
    { name: "Rahim", marks: 75 },
    { name: "Karim", marks: 90 },
    { name: "Sakib", marks: 65 },
    { name: "Nadia", marks: 85 },
    { name: "Mitu", marks: 95 }
];

let totalStudents = students.length;
let totalMarks = 0;
let averageMarks = 0;
let highestMarks = 0;
let topStudent = "";
let lowestMarks = 100;
let lowestStudent = "";
let passCount = 0;
let excellentCount = 0;

for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
    if (students[i].marks < lowestMarks) {
        lowestMarks = students[i].marks;
        lowestStudent = students[i].name;
    }
    if (students[i].marks >= 40) {
        passCount++;
    }
    if (students[i].marks >= 90) {
        excellentCount++;
    }

    if (students[i].marks > highestMarks) {
        highestMarks = students[i].marks;
        topStudent = students[i].name;
    }
}

averageMarks = totalMarks / totalStudents;
console.log("Total Students:", totalStudents);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));
console.log("Top Student:", topStudent, ",with marks:", highestMarks);
console.log("Lowest Student:", lowestStudent, ",with marks:", lowestMarks);
console.log("Number of Students Passed:", passCount);
console.log("Number of Excellent Students:", excellentCount);