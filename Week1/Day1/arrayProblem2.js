const numbers = [10, 20, 30, 40, 50];

let sum = 0;
let smallest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(`Total sum of Array: ${sum}`);
console.log(`Smallest element: ${smallest}`);