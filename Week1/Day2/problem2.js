// Reverse an array without using the built-in reverse method

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    console.log(`Reversed array: ${reversed}`);
}

let array = [1, 2, 3, 4, 5];
reverseArray(array);