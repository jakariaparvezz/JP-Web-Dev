// Array with for loop
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log('-------------------');

// Array with for...of loop
for (const number of numbers) {
    console.log(number);
}
console.log('-------------------');

// Array with forEach method
numbers.forEach((number, index) => {
    console.log(index, number);
});
console.log('-------------------');

// push() — add at the end
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
console.log('-------------------');

// pop() — remove from the end
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
console.log('-------------------');

// unshift() — add at the beginning
fruits.unshift("Strawberry");
console.log(fruits);
console.log('-------------------');

// shift() — remove from the beginning
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
console.log('-------------------');

// map() — create a new array by transforming each element
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// another example
const names = ["Alice", "Bob", "Charlie"];
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
console.log('-------------------');     