function greeting(){
    let name = 'Jakaria';

    return function(){
        console.log('Hello ' + name);
    }
}

const greet = greeting();

greet();

// Another example of closure

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter(); 
counter(); 
counter(); 
counter(); 
counter(); 


// Another example of closure

function createPassword(){
    let password = 'JP1234';

    return function(pass){
        if(pass === password){
            console.log('Access Granted');
        }
        else{
            console.log('Access Denied');
        }
    }
}

const checkPassword = createPassword();
checkPassword('JP1234'); 
checkPassword('1234');