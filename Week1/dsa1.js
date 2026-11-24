// Second leargest number

const arr = [10, 50, 20, 40, 30];

function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    console.log(`The largest number is: ${largest}`);
    console.log(`The second largest number is: ${secondLargest}`);
}

secondLargest(arr);
