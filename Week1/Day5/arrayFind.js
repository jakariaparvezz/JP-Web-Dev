// Filter in array 
const numbers = [5, 10, 15, 20, 25, 30];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);// [10, 20, 30]

// Find in array
const result = numbers.find(number => number > 15);

console.log(result); // 20

// include() in array
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false

// reduce() in array
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total); // 105