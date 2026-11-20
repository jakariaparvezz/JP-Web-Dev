// Call Back Function
function greet(name) {
    console.log('Hello ' + name);
}
function yourInput(name, callback) {
    callback(name);
}
yourInput('Alice', greet);


// another example of callback function

function process(callback) {
    let userName = 'Jakaria';
    callback(userName);
}
process(greet);