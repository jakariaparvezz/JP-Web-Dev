// Creating objects
// Method 1 — Object literal (most commonly used)

const student = {
  name: "Jakaria",
  age: 22,
  university: "Uttara University",
  department: "CSE",
  cgpa: 3.25
};

// Method 2 — Empty object
const user = {};

user.name = "Rahim";
user.age = 25;
user.isDeveloper = true;

console.log(user);

// Method 3 — Object constructor

const user = new Object();

user.name = "Rahim";
user.age = 25;


// Breacket Notation
const person = {
  name: "Rahim",
  age: 25
};

const property = "name";

console.log(person[property]); // Rahim

// Add Property
const user = {
  name: "Rahim"
};

user.age = 25;
user.email = "rahim@example.com";

console.log(user);