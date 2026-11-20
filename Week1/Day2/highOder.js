function calculate(operation, a, b) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(add, 10, 5));
console.log(calculate(multiply, 10, 5));