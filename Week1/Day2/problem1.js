//Sum of an array

function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Sum of the array: ${sum}`);
}



let array = [10, 20, 30, 40, 50];
sumArray(array);