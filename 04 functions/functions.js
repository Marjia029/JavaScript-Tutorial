// basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Marjia")); // Output: Hello, Marjia!

// function expression
const square = function(number) {
    return number * number;
};

console.log(square(5)); // Output: 25

// arrow function
const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // Output: 12

// function with default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());        // Output: Hello, Guest!
console.log(greet("Marjia")); // Output: Hello, Marjia!

// function returning another function
function createMultiplier(multiplier){
    return function(number) {
        return number * multiplier;
    }
}
const multiple = createMultiplier(10);
console.log(multiple(5)); // Output: 50

// Immediately invoked function expression
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

//recursive function

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

// annonymously called function
setTimeout(function() {
    console.log("This message appears after 2 seconds!");
}, 2000);

// callback function
function processUserInput(callback) {
    const name = "Marjia";
    callback(name);
}

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

processUserInput(greetUser); // Output: Hello, Marjia!

