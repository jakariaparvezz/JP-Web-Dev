const numbers = [10, 20, 30, 40, 50];

let sum = 0;
let reverseArray = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reverseArray.push(numbers[i]);
}

console.log(`Previous Array: ${numbers}`);
console.log(`Reversed Array: ${reverseArray}`);