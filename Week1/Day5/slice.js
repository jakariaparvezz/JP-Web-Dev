// Slice() 
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);  // [20, 30, 40]
console.log(numbers); // Original remains unchanged

// Splice()
const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);
console.log(fruits); // ["Apple", "Orange"]

// also adding elements using splice
fruits.splice(1, 0, "Grapes", "Pineapple");
console.log(fruits); // ["Apple", "Grapes", "Pineapple", "Orange"]