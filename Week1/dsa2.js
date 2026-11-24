// Frequency counter
const arr = [1, 2, 2, 3, 3, 3, 4];

function countFrequency(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
    return frequency;
}

console.log(countFrequency(arr));
